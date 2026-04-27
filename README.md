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

#### *.libraries.yml

This file declares the JavaScript and CSS libraries that the web app depends on.
The files can be both local or remote.

```yaml
google.maps:
  js:
    https://maps.googleapis.com/maps/api/js?key=myownapikey&signed_in=true&libraries=drawing&callback=initMap:
      type: external
      attributes:
        defer: true
        async: true
        data-test: map-link
```

For a detailed explanation of the format, please see the documentation [Adding assets (CSS, JS) to a Drupal module via *.libraries.yml](https://www.drupal.org/docs/develop/creating-modules/adding-assets-css-js-to-a-drupal-module-via-librariesyml).

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
