/**
 * @file
 * Behaviors for the LKB Web App Example module.
 */
(function (Drupal) {
  'use strict';

  /**
   * Defines a behavior to be run during attach and detach phases.
   */
  Drupal.behaviors.lkbWebAppExample = {

    /**
     * Initializes JavaScript behavior.
     *
     * @param {Document|HTMLElement} [context=document]
     *   An element to attach behaviors to.
     * @param {object} [settings=drupalSettings]
     *   An object containing settings for the current context. If none is given,
     *   the global {@link drupalSettings} object is used.
     */
    attach: function (context, settings) {
    },

    /**
     * Reverts and cleans up JavaScript behavior initialization.
     *
     * @param {Document|HTMLElement} context
     *   An element to attach behaviors to.
     * @param {object} settings
     *   An object containing settings for the current context.
     * @param {string} trigger
     *   One of `'unload'`, `'move'`, or `'serialize'`.
     */
    detach: function (context, settings, trigger) {
    }

  };
})(Drupal);
