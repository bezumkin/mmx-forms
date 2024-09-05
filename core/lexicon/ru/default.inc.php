<?php

$_tmp = [
    'menu_name' => 'mmxForms',
    'menu_desc' => 'Удобный конструктор форм, основанный на Vueform',
    'version' => [
        'available' => 'доступна {version}',
    ],
    'actions' => [
        'add' => 'Добавить',
        'create' => 'Создать',
        'cancel' => 'Отмена',
        'delete' => 'Удалить',
        'edit' => 'Редактировать',
        'remove' => 'Убрать',
        'save' => 'Сохранить',
        'submit' => 'Отправить',
        'close' => 'Закрыть',
        'ok' => 'Ok',
        'send' => 'Отправить',
        'view' => 'Просмотр',
        'generate' => 'Сгенерировать',
        'delete_unsent' => 'Неотправленные',
        'export' => 'Экспорт',
    ],
    'models' => [
        'form' => [
            'title_one' => 'Форма',
            'title_many' => 'Формы',
            'id' => 'Id',
            'title' => 'Название',
            'schema' => 'Схема формы',
            'preview' => 'Предпросмотр',
            'help' => 'Помощь',
            'active' => 'Активно',
            'email' => 'Отправлять email',
            'settings' => 'Настройки',
            'action' => 'Действие',
            'action_desc' => 'Что делать после успешной отправки формы',
            'prepare_snippet' => 'Сниппет подготовки',
            'prepare_snippet_desc' => 'Сниппет вызывается после отправки формы и перед сохранением значений пользователя. Он получит массив с 2 ключами: "form" и "values", и должен вернуть в ответ новый массив со значениями, или строку с текстом ошибки, или null',
            'emails' => [
                'add' => 'Добавить получателя',
                'desc' => 'Можно использовать ключи формы в качестве плейсхолдеров.<br/>Например, в теме письма можно указать "Спасибо, [[+name]]!".',
                'to' => 'Кому',
                'subject' => 'Тема',
                'chunk' => 'Чанк',
                'skip_files' => 'Не прикреплять загруженные файлы к письмам',
            ],
            'actions' => [
                'reset' => 'Очистка формы',
                'reset_desc' => 'Все значения будут очищены и форму можно будет отправить заново.',
                'redirect' => 'Редирект на другую страницу',
                'redirect_desc' => 'Укажите url или id страницы MODX.',
                'message' => 'Заменить форму сообщением',
                'message_desc' => 'Укажите сообщение, которое хотите показать пользователю. Можно использовать теги HTML.',
                'snippet' => 'Получить действие из сниппета',
                'snippet_desc' => 'Сниппет будет вызван после сохранения данных пользователя. Он получит массив с 2 ключами: "form" и "values", и должен вернуть массив формата ["type" => "reset|message|redirect", "value" => "string|html|url"]',
            ],
            'help_text' => 'Вы можете использовать <a href="https://builder.vueform.com/demo?v=dev" target="_blank">Конструктор Vueform</a> для создания формы, а затем скопировать сюда готовую схему.<br/><br/>' .
                'Для этого на вкладку "Export" в правой панеле, выберите "Schema Object" и скопируйте содержимое переменной "vueform" из средней панели.<br/><br/>' .
                "Значение должно выглядеть примерно так: <pre><code>{\n  schema: {\n    name: {type: 'text', label: 'Ваше имя', rules: ['required']},\n    submit: {type: 'button', buttonLabel: 'Отправить!', submits: true},\n  }\n}</code></pre>" .
                'Вкладка предпросмотра активна только если получается разобрать вашу схему. Что, конечно, не гарантирует правильность этой схемы.',
        ],
        'submission' => [
            'title_one' => 'Отправка',
            'title_many' => 'Отправки',
            'id' => 'Id',
            'values' => 'Значения',
            'submitted_at' => 'Дата отправки',
            'confirm_generate' => 'Вы уверены, что хотите перегенерировать электронные письма для этой отправки?<br><br>Это удалит все неотправленные письма этой отправки, и создаст новые с текущими настройками формы.',
        ],
        'email' => [
            'title_one' => 'Письмо',
            'title_many' => 'Письма',
            'id' => 'Id',
            'to' => 'Кому',
            'subject' => 'Тема',
            'body' => 'Содержимое',
            'sent' => 'Отправлено',
            'sent_at' => 'Дата отправки',
            'error' => 'Ошибка',
            'confirm_delete_unsent' => 'Вы уверены, что хотите удалить все неотправленные письма из очереди?',
        ],
    ],
    'components' => [
        'confirm' => [
            'title' => 'Требуется подтверждение',
            'message' => 'Вы уверены?',
        ],
        'table' => [
            'no_data' => 'Нет данных для вывода',
            'no_results' => 'Результатов не найдено',
            'records' => 'Записей нет | {total} запись | {total} записи | {total} записей',
            'query' => 'Поиск...',
            'delete' => [
                'title' => 'Требуется подтверждение',
                'confirm' => 'Вы уверены, что хотите удалить эту запись?',
            ],
        ],
        'datePicker' => [
            'placeholder_date' => 'Выберите дату',
            'placeholder_range' => 'Выберите период',
            'months' => [
                'январь',
                'февраль',
                'март',
                'апрель',
                'май',
                'июнь',
                'июль',
                'август',
                'сентябрь',
                'октябрь',
                'ноябрь',
                'декабрь',
            ],
            'monthsShort' => [
                'янв.',
                'февр.',
                'март',
                'апр.',
                'май',
                'июнь',
                'июль',
                'авг.',
                'сент.',
                'окт.',
                'нояб.',
                'дек.',
            ],
            'weekdays' => ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
            'weekdaysShort' => ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
            'weekdaysMin' => ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
        ],
    ],
    'snippets' => [
        'forms' => [
            'id' => 'Id формы для вывода',
            'no_css' => 'Не загружать собранный CSS, чтобы вы могли использовать собственные стили',
        ],
    ],
    'errors' => [
        'form' => [
            'schema' => 'Не могу разобрать схему, проверьте синтаксис',
        ],
        'file' => [
            'upload' => 'Не могу загрузить файл',
            'delete' => 'Не могу удалить файл',
            'attachment' => 'Вложения не поддерживаются',
        ],
    ],
    'success' => [
        'form' => [
            'submitted' => 'Форма успешно отправлена!',
        ],
    ],
];

/** @var array $_lang */
$_lang = array_merge($_lang, MMX\Forms\App::prepareLexicon($_tmp, MMX\Forms\App::NAMESPACE));
unset($_tmp);