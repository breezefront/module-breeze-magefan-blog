define([
    'mage/translate'
], function ($t) {
    'use strict';

    $(document).on('click', '.mfblog-contents .mfblog-contents-toggle', function () {
        $(this).text($(this).text() === $t('hide') ? $t('show') : $t('hide'));
        $('.mfblog-contents .mfblog-contents-toc').toggle();
    });
});
