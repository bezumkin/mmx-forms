<?php

$_tmp = [
    'menu_name' => 'mmxForms',
    'menu_desc' => 'Friendly form builder based on Vueform',
    'version' => [
        'available' => '{version} available',
    ],
    'actions' => [
        'add' => 'Add',
        'create' => 'Create',
        'cancel' => 'Cancel',
        'delete' => 'Delete',
        'edit' => 'Edit',
        'remove' => 'Remove',
        'save' => 'Save',
        'submit' => 'Submit',
        'close' => 'Close',
        'ok' => 'Ok',
        'send' => 'Send',
        'view' => 'View',
        'generate' => 'Generate',
        'delete_unsent' => 'Delete unsent',
    ],
    'models' => [
        'form' => [
            'title_one' => 'Form',
            'title_many' => 'Forms',
            'id' => 'Id',
            'title' => 'Title',
            'schema' => 'Form Schema',
            'preview' => 'Preview Form',
            'help' => 'Help',
            'active' => 'Active',
            'email' => 'Send emails',
            'settings' => 'Form Settings',
            'action' => 'Action',
            'action_desc' => 'What to do after successfully submitting the form',
            'prepare_snippet' => 'Prepare Snippet',
            'prepare_snippet_desc' => 'Snippet will be called after submitting the form and before saving the data. It will receive an array with 2 keys: "form" and "values", and should return an array with changed values, or an error message or null',
            'emails' => [
                'add' => 'Add new recipient',
                'desc' => 'You can specify the keys of form as placeholders.<br/>For example, you can write "Thank you, [[+name]]!" in the subject.',
                'to' => 'To',
                'subject' => 'Subject',
                'chunk' => 'Chunk',
                'skip_files' => 'Do not attach uploaded files to email',
            ],
            'actions' => [
                'reset' => 'Reset Form',
                'reset_desc' => 'All entered values will be cleared and the user will be able to resend the form.',
                'redirect' => 'Redirect to another page',
                'redirect_desc' => 'You can specify an url or id of MODX page.',
                'message' => 'Replace form with a message',
                'message_desc' => 'Please, enter the message that you want to show to the user. You can use HTML tags.',
                'snippet' => 'Get action from a snippet',
                'snippet_desc' => 'Snippet will be called after saving the user data. It will receive an array with 2 keys: "form" and "values", and should return an array of format ["type" => "reset|message|redirect", "value" => "string|html|url"]',
            ],
            'help_text' => 'Please use <a href="https://builder.vueform.com/demo?v=dev" target="_blank">Vueform Builder</a> to create a form and then paste its schema here.<br/><br/>' .
                'Go to the "Export" tab in the right pane, then select the "Schema Object" output and copy the contents of the "vueform" variable of the code in the middle pane.<br/><br/>' .
                "The value should be something like: <pre><code>{\n  schema: {\n    name: {type: 'text', label: 'Your name', rules: ['required']},\n    submit: {type: 'button', buttonLabel: 'Submit!', submits: true},\n  }\n}</code></pre>" .
                'The preview tab only works if the schema can be parsed correctly. Which does not guarantee the correctness of this scheme.',
        ],
        'submission' => [
            'title_one' => 'Submission',
            'title_many' => 'Submissions',
            'id' => 'Id',
            'values' => 'Values',
            'submitted_at' => 'Submitted At',
            'confirm_generate' => 'Are you sure you want to re-generate emails for this form submission?<br><br>This will delete all unsent emails for this submission, and then create new ones with the current form settings.',
        ],
        'email' => [
            'title_one' => 'Email',
            'title_many' => 'Emails',
            'id' => 'Id',
            'to' => 'To',
            'subject' => 'Subject',
            'body' => 'Body',
            'sent' => 'Sent',
            'sent_at' => 'Sent At',
            'error' => 'Error',
            'confirm_delete_unsent' => 'Are you sure you want to delete all unsent emails from the queue?',
        ],
    ],
    'components' => [
        'no_data' => 'Nothing to display',
        'no_results' => 'Nothing found',
        'records' => 'No records | 1 record | {total} records',
        'query' => 'Search...',
        'delete' => [
            'title' => 'Confirmation required',
            'confirm' => 'Are you sure you want to delete this entry?',
        ],
    ],
    'snippets' => [
        'forms' => [
            'id' => 'The id of form to output',
            'no_css' => 'Do not register frontend CSS so you could use your own styles',
        ],
    ],
    'errors' => [
        'form' => [
            'schema' => 'Schema could not be parsed, please check the syntax',
        ],
        'file' => [
            'upload' => 'Could not upload file',
            'delete' => 'Could not delete file',
            'attachment' => 'Attachments are not supported',
        ],
    ],
    'success' => [
        'form' => [
            'submitted' => 'The form has been successfully submitted!',
        ],
    ],
];

/** @var array $_lang */
$_lang = array_merge($_lang, MMX\Forms\App::prepareLexicon($_tmp, MMX\Forms\App::NAMESPACE));
unset($_tmp);