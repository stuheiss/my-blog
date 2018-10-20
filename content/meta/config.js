const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "PersonalBlog - a blog starter for GatsbyJS", // <title>
  shortSiteTitle: "PersonalBlog GatsbyJS Starter", // <title> ending for posts and pages
  siteDescription: "PersonalBlog is a GatsbyJS starter.",
  siteUrl: "https://stuheiss.com",
  pathPrefix: "",
  siteImage: "preview.jpg",
  siteLanguage: "en",
  // author
  authorName: "Stu Heiss",
  authorTwitterAccount: "stuheiss",
  // info
  infoTitle: "Stu Heiss",
  infoTitleNote: "personal blog",
  // manifest.json
  manifestName: "PersonalBlog - a blog starter for GatsbyJS",
  manifestShortName: "PersonalBlog", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.background,
  manifestThemeColor: colors.background,
  manifestDisplay: "standalone",
  // contact
  contactEmail: "stu@stuheiss.com",
  // social
  authorSocialLinks: [
    { name: "github", url: "https://github.com/stuheiss" },
    { name: "twitter", url: "https://twitter.com/stuheiss" },
    { name: "facebook", url: "http://facebook.com/stuheiss" }
  ]
};
