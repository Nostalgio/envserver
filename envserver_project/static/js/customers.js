function copy_from_company(prefix) {
    fields = ['address_line1', 'address_line2', 'city', 'state', 'postal_code', 'country'];
    for (var i = 0; i < fields.length; i++) {
        try {
            $('#id_' + prefix + '-' + fields[i]).val( $('#id_' + fields[i]).val() );
        } catch (e) {
            console.log("Failed to copy_from_company(), " + e);
        }
    }
}

function get_tab_name(first_name_field, last_name_field) {
    first_name = $(first_name_field).val();
    last_name = $(last_name_field).val();
    if (first_name.length > 0 & last_name.length > 0)
        return first_name.charAt(0) + '. ' + last_name;
    else if (first_name.length > 0)
        return first_name;
    else if (last_name.length > 0)
        return last_name;
    else
        return "User ...";
}

function update_special_fields(prefix) {
    var pre_field_text = '#id_' + prefix + '-';
    var $email_field = $(pre_field_text+'email');
    var $username_field = $(pre_field_text+'username');
    var $first_name_field = $(pre_field_text+'first_name');
    var $last_name_field = $(pre_field_text+'last_name');
    var $form_tab = $('a[href="#'+prefix+'_row"]');

    // Copy email to username
    $email_field.keyup( function() {
        $username_field.val( $(this).val() );
    });
    // Update tab title from name
    $($first_name_field).add($last_name_field).keyup( function() {
        $form_tab.html(get_tab_name($first_name_field, $last_name_field));
    });
}

function update_inline_index(element, regex, replacement) {
    if ($(element).attr("for"))
        $(element).attr("for", $(element).attr("for").replace(regex, replacement));
    if (element.id) {
        // Update targets to element
        $('a[href="#'+element.id+'"]').attr('href', function (i, attr) {
            return attr.replace(regex, replacement);
        });
        element.id = element.id.replace(regex, replacement);
    }
    if (element.name)
        element.name = element.name.replace(regex, replacement);
    if (element.className)
        element.className = element.className.replace(regex, replacement);
    if (element.getAttribute('data-prefix'))
        element.setAttribute('data-prefix', element.getAttribute('data-prefix').replace(regex, replacement));
    if (element.getAttribute('data-formset'))
        element.setAttribute('data-formset', element.getAttribute('data-formset').replace(regex, replacement));

}
