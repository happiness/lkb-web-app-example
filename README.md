# LKB Web App Example

This is an example web app for the _Lantbrukets Kunskapsbank_ Drupal website. It
demonstrates how to bundle a web app so that it can be used on the website.

## Structure of a web app

A web app in the sense of this module is a minimal Drupal module that enables
a web app to be installed using standard Drupal installation procedures.

For a JavaScript to be available to Drupal, it must be declared in a library via
a `<NAME>.libraries.yml` file.

### Required files

- `lkb_web_app_example.info.yml`
- `composer.json`
- `lib_web_app_example.libraries.yml`

### Optional files

- `assets/*`

## Drupal installation

Add a repository of the type _path_ to the project root `composer.json`.

```json
{
  "repositories": [
    {
      "type": "path",
      "url": "web/modules/custom/lkb_web_apps/modules/lkb_web_app_example"
    }
  ]
}
```

Make sure you add the repository before the main packages.drupal.org repository.

Run `composer require lkb/web_app_example` to install the module.
