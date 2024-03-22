Forms for MODX 3
---

> This extra is part of **MMX** initiative - the **M**odern **M**OD**X** approach.

The [Vueform][vueform] integration to build and process any kind of forms.

### Features

- Convenient way to create forms in manager by specifying the schema.
- You can use free [Vueform Builder][builder] to generate a form and export ready schema.
- Optional sending of emails to any amount of addresses with custom chunks.
- 3 types of action on form submission: reset, redirect and show custom message.
- All form submissions and emails are saved in database.

### Dependencies

This package requires [mmxDatabase][mmx-database] to work with MODX database using Eloquent models.

The `mmx/database` dependency will be downloaded automatically by Composer, you need only install it inside MODX.

### Prepare

This package can be installed only with Composer.

If you are still not using Composer with MODX 3, just download the `composer.json` of your version:
```bash
cd /to/modx/root/
wget https://raw.githubusercontent.com/modxcms/revolution/v3.0.4-pl/composer.json
```

Then run `composer update` and you are ready to install the **mmx** packages.

### Install

```bash
composer require mmx/forms --update-no-dev
composer exec mmx-database install # optional, if you haven't used Eloquent for MODX 3 before
composer exec mmx-forms install
```

### Update
```bash
composer update mmx/forms
composer exec mmx-forms install
```
Changes will be described on repository [Releases][releases] page. Don't forget to subscribe for updates!

### Remove

```bash
composer exec mmx-forms remove
composer exec mmx-database remove # only if you don't want to use Eloquent for MODX 3 anymore
composer remove mmx/forms
```

### How to use

1. Create new forms in `/manager/?a=home&namespace=mmx-forms` section.
2. Call the `mmxForms` snippet on any MODX page with id of form:
```
[[!mmxForms?id=`1`]]
```
_Snippet should only be called without caching!_

3. Enjoy!

### Styling

Snippet will load built-in CSS based on Bootstrap 5 by default. You can disable this behaviour by `noCSS` param.
```php
[[!mmxForms?id=`1`&noCSS=`1`]]
```

Better way is to change the CSS variables, for example:
```html
<style>
.mmx-forms * {
    --vf-primary: red !important;
}
</style>
```
You can see which variables are used by the form and change them.

### Nota bene!

Project is still under development, do not hesitate to use [issues][issues] if you have any.

[builder]: https://builder.vueform.com
[vueform]: https://vueform.com
[mmx-database]: https://packagist.org/packages/mmx/database
[releases]: https://github.com/bezumkin/mmx-forms/releases
[issues]: https://github.com/bezumkin/mmx-forms/issues
