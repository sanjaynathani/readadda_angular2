/**
 * @license Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	 config.uiColor = '#9AB8F3',
         config.toolbar = [
            {name: 'basicstyles', items: ['Bold', 'Italic', 'Strike', '-', 'RemoveFormat']},
            {name: 'insert', items: ['fastimage']},
            {name: 'links', items: ['Link', 'Unlink', 'Anchor']},
            {name: 'paragraph', items: ['NumberedList', 'BulletedList', '-', 'Outdent', '-', 'Indent']},
            {name: 'clipboard', items: ['Undo', '-', 'Redo']},
            {name: 'document', items: ['Source']}
         ],
         config.resize_enabled = false,
         config.height = '200px'; 
         config.extraPlugins = 'fastimage';
};
