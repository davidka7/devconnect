const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// Load Validation
const validateProfileInput = require("../../validation/profile");
const validatePetInput = require("../../validation/pet");
const validatePetForSaleInput = require("../../validation/petforsale");
// Load Profile Model
const Profile = require("../../models/Profile");
// Load User Profile
const User = require("../../models/User");

// @route GET api/profile/test
// @desc  Tests profile route
// @acces Public
router.get("/test", (req, res) => res.json({ msg: "Profile Works" }));

// @route GET api/profile
// @desc  Get Current users profile
// @acces Private
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};
    Profile.findOne({
      user: req.user.id,
    })
      .populate("user", ["name", "avatar"])
      .then((profile) => {
        if (!profile) {
          errors.noprofile = "There is no profile for this user";
          return res.status(404).json(errors);
        }
        res.json(profile);
      })
      .catch((err) => res.status(404).json(err));
  }
);

// @route Get api/profile/all
// @desc  Get all profiles
// @acces Public
router.get("/all", (req, res) => {
  const errors = {};
  Profile.find()
    .populate("user", ["name", "avatar"])
    .then((profiles) => {
      if (!profiles) {
        errors.noprofile = "There are no profiles";
        return res.status(404).json(errors);
      }
      res.json(profiles);
    })
    .catch((err) => res.status(404).json({ profile: "There are no profiles" }));
});

// @route Get api/profile/handle/:handle
// @desc  Get profile by handle
// @acces Public

router.get("/handle/:handle", (req, res) => {
  const errors = {};
  Profile.findOne({ handle: req.params.handle })
    .populate("user", ["name", "avatar"])
    .then((profile) => {
      if (!profile) {
        errors.noprofile = "There is no profile for this user";
        res.status(404).json(errors);
      }
      res.json(profile);
    })
    .catch((err) => res.status(404).json(err));
});

// @route Get api/profile/user/:user_id
// @desc  Get profile by user ID
// @acces Public

router.get("/user/:user_id", (req, res) => {
  const errors = {};
  Profile.findOne({ user: req.params.user_id })
    .populate("user", ["name", "avatar"])
    .then((profile) => {
      if (!profile) {
        errors.noprofile = "There is no profile for this user";
        res.status(404).json(errors);
      }
      res.json(profile);
    })
    .catch((err) =>
      res.status(404).json({ profile: "There is no profile for this user" })
    );
});

// @route Post api/profile
// @desc  Create or edit user profile
// @acces Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateProfileInput(req.body);

    // Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }

    // Get fields
    const profileFields = {};
    profileFields.user = req.user.id;
    if (req.body.handle) profileFields.handle = req.body.handle;
    if (req.body.company) profileFields.company = req.body.comapny;
    if (req.body.website) profileFields.website = req.body.website;
    if (req.body.location) profileFields.location = req.body.location;
    if (req.body.bio) profileFields.bio = req.body.bio;
    if (req.body.status) profileFields.status = req.body.status;

    // Skills - split into array
    if (typeof req.body.skills !== "undefined") {
      profileFields.skills = req.body.skills.split(",");
    }

    // Social
    profileFields.social = {};
    if (req.body.youtube) profileFields.social.youtube = req.body.youtube;
    if (req.body.twitter) profileFields.social.twitter = req.body.twitter;
    if (req.body.facebook) profileFields.social.facebook = req.body.facebook;
    if (req.body.linkedin) profileFields.social.linkedin = req.body.linkedin;
    if (req.body.instagram) profileFields.social.instagram = req.body.instagram;

    Profile.findOne({ user: req.user.id }).then((profile) => {
      if (profile) {
        Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        ).then((profile) => res.json(profile));
      } else {
        // Create
        // Check if handle exists
        Profile.findOne({ handle: profileFields.handle }).then((profile) => {
          if (profile) {
            errors.handle = "That handle already exists";
            res.status(400).json(errors);
          }

          // Save Profile
          new Profile(profileFields)
            .save()
            .then((profile) => res.json(profile));
        });
      }
    });
  }
);

// @route Post api/profile/pet
// @desc  Add pet to profile
// @acces Private
router.post(
  "/pet",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validatePetInput(req.body);

    // Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }

    Profile.findOne({
      user: req.user.id,
    }).then((profile) => {
      const newPet = {
        name: req.body.name,
        species: req.body.species,
        breed: req.body.breed,
        from: req.body.from,
        to: req.body.to,
        current: req.body.current,
        description: req.body.description,
      };
      // Add to pet array
      profile.pet.unshift(newPet);

      profile.save().then((profile) => res.json(profile));
    });
  }
);
// @route Post api/profile/petforsale
// @desc  Add petforsale to profile
// @acces Private
router.post(
  "/petforsale",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validatePetForSaleInput(req.body);

    // Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }

    Profile.findOne({
      user: req.user.id,
    }).then((profile) => {
      const newPetForSale = {
        name: req.body.name,
        species: req.body.species,
        cost: req.body.cost,
        from: req.body.from,
        to: req.body.to,
        current: req.body.current,
        description: req.body.description,
      };
      // Add to petforsale array
      console.log(newPetForSale);
      profile.petforsale.unshift(newPetForSale);

      profile.save().then((profile) => res.json(profile));
    });
  }
);

// @route DELETE api/profile/pet/:pet_id
// @desc  Delte pet from profile
// @acces Private
router.delete(
  "/pet/:pet_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({
      user: req.user.id,
    }).then((profile) => {
      // Get remove index
      const removeIndex = profile.pet
        .map((item) => item.id)
        .indexOf(req.params.pet_id);

      // Splice out of array
      profile.pet.splice(removeIndex, 1);

      // Save
      profile
        .save()
        .then((profile) => res.json(profile))
        .catch((err) => res.status(404).json(err));
    });
  }
);

// @route DELETE api/profile/petforsale/:petforsale_id
// @desc  Delte petforsale from profile
// @acces Private
router.delete(
  "/petforsale/:petforsale_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({
      user: req.user.id,
    }).then((profile) => {
      // Get remove index
      const removeIndex = profile.petforsale
        .map((item) => item.id)
        .indexOf(req.params.petforsale_id);

      // Splice out of array
      profile.petforsale.splice(removeIndex, 1);

      // Save
      profile
        .save()
        .then((profile) => res.json(profile))
        .catch((err) => res.status(404).json(err));
    });
  }
);

// @route DELETE api/profile
// @desc  Delte user and profile
// @acces Private
router.delete(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOneAndRemove({ user: req.user.id }).then(() => {
      User.findOneAndRemove({ _id: req.user.id }).then(() =>
        res.json({ success: true })
      );
    });
  }
);

module.exports = router;
