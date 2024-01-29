define([
    'uiComponent',
    'mage/translate'
], function (Component, $t) {
    'use strict';

    Component.register('Magefan_Blog/js/magefan-comments');

    $(document).on('click', '.mfblog-contents .mfblog-contents-toggle', function () {
        $(this).text($(this).text() === $t('hide') ? $t('show') : $t('hide'));
        $('.mfblog-contents .mfblog-contents-toc').toggle();
    });
});
