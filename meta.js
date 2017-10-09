module.exports = {
  "prompts": {
    "name": {
      "type": "string",
      "required": true,
      "message": "Project name"
    },
    "short_name": {
      "type": "string",
      "required": false,
      "message": "Project short name: fewer than 12 characters to not be truncated on homescreens (default: same as name)",
    },
    "description": {
      "type": "string",
      "required": false,
      "message": "Project description",
      "default": "A Vue.js project"
    },
    "author": {
      "type": "string",
      "message": "Author"
    }
  },
  "completeMessage": "To get started:\n\n  {{^inPlace}}cd {{destDirName}}\n  {{/inPlace}}npm i\n  pm2 start pm2.json\n\nDocumentation can be found at https://github.com/Unitech/pm2 "
}
