wp.blocks.registerBlockType( 'jsforwp/callout-block', {
    
    title: 'Callout Block',

    icon: 'megaphone',

    category: 'common',

    attributes: {
		content: {
			source: 'html',
			selector: 'h2',
        },
        backgroundColor: {
            type: 'string',
            default: '#900900',
        },
        textColor: {
            type: 'string',
            default: '#ffffff',
        }
	},

	edit: function( props ) {
		return wp.element.createElement( 
            wp.element.Fragment, 
            null, 
            wp.element.createElement(
                wp.editor.InspectorControls, 
                null,
                wp.element.createElement(
                    wp.editor.PanelColorSettings, {
                        title: wp.i18n.__("Color Settings", "jsforwp"),
                        colorSettings: [
                            {
                                label: wp.i18n.__("Background Color", "jsforwp"),
                                value: props.attributes.backgroundColor,
                                onChange: function( newBackgroundColor ) {
                                    props.setAttributes({ backgroundColor: newBackgroundColor });
                                }
                            },
                            {
                                label: wp.i18n.__("Text Color", "jsforwp"),
                                value: props.attributes.textColor,
                                onChange: function( newColor ) {
                                    props.setAttributes({ textColor: newColor });
                                }
                            }
                        ]
                    }
                )
            ),
            wp.element.createElement( 
                wp.editor.RichText, {
                    tagName: 'h2',
                    className: props.className,
                    value: props.attributes.content,
                    style: {
                        backgroundColor: props.attributes.backgroundColor,
                        color: props.attributes.textColor
                    },
                    onChange: function( newContent ) {
                        props.setAttributes( { content: newContent } );
                    }
                } 
            ) 
        );
	},

	save: function( props ) {
		return wp.element.createElement( wp.editor.RichText.Content, {
            tagName: 'h2', 
            value: props.attributes.content,
            style: {
                backgroundColor: props.attributes.backgroundColor,
                color: props.attributes.textColor
            },		
        } );
	}
} );