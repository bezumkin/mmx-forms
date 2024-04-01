const i={vueform:{elements:{list:{add:"+ Addieren",remove:"&times;"},file:{defaultName:"File",dndTitle:"File hochladen",dndDescription:"File ablegen oder zum Hochladen hier klicken",removeConfirm:"Durch das Entfernen Files wird diese endgültig gelöscht. Sind Sie sicher, dass Sie fortfahren?",select:"File auswählen",upload:"Hochladen"},multifile:{uploadButton:"Files hochladen",dndTitle:"Files hochladen",dndDescription:"File ablegen oder zum Hochladen hier klicken"},gallery:{uploadButton:"Bilder hochladen",dndTitle:"Bilder hochladen",dndDescription:"Bild ablegen oder zum Hochladen hier klicken"}},steps:{finish:"Beenden",next:"Nächste",previous:"Früher"},editor:{acceptedMimesError:"Accepted mimes are: :mimes",acceptedExtensionsError:"Accepted extenions are: :extensions",acceptedMimes:"Akzeptierte mimes sind: :mimes",acceptedExtensions:"Akzeptierte extenions sind: :extensions"},datepicker:{weekdays:{shorthand:["So","Mo","Di","Mi","Do","Fr","Sa"],longhand:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"]},months:{shorthand:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],longhand:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]},daysInMonth:[31,28,31,30,31,30,31,31,30,31,30,31],firstDayOfWeek:1,ordinal:function(){return""},rangeSeparator:" bis ",weekAbbreviation:"KW",scrollTitle:"Zum Ändern scrollen",toggleTitle:"Zum Umschalten klicken",amPM:["AM","PM"],yearAriaLabel:"Year",monthAriaLabel:"Month",hourAriaLabel:"Hour",minuteAriaLabel:"Minute"},dateFormats:{datetimeSeconds24:"DD.MM.YYYY HH:mm:ss",datetimeSeconds12:"DD.MM.YYYY hh:mm:ss a",datetime24:"DD.MM.YYYY HH:mm",datetime12:"DD.MM.YYYY hh:mm a",timeSeconds24:"HH:mm:ss",timeSeconds12:"hh:mm:ss a",time24:"HH:mm",time12:"hh:mm a",date:"DD.MM.YYYY"},multiselect:{multipleLabelOne:"1 option ausgewählt",multipleLabelMore:":options optionen ausgewählt",noResults:"Keine Optionen gefunden",noOptions:"Liste ist leer."},defaultMessage:"Ungültiges Feld",a11y:{file:{description:"Press Backspace to remove"},list:{remove:"Remove item button"}}},validation:{accepted:":attribute muss akzeptiert werden.",active_url:":attribute ist keine gültige Internet-Adresse.",after:":attribute muss ein Datum nach :date sein.",after_or_equal:":attribute muss ein Datum nach :date oder gleich :date sein.",alpha:":attribute darf nur aus Buchstaben bestehen.",alpha_dash:":attribute darf nur aus Buchstaben, Zahlen, Binde- und Unterstrichen bestehen.",alpha_num:":attribute darf nur aus Buchstaben und Zahlen bestehen.",array:":attribute muss ein Array sein.",before:":attribute muss ein Datum vor :date sein.",before_or_equal:":attribute muss ein Datum vor :date oder gleich :date sein.",between:{numeric:":attribute muss zwischen :min & :max liegen.",file:":attribute muss zwischen :min & :max Kilobytes groß sein.",string:":attribute muss zwischen :min & :max Zeichen lang sein.",array:":attribute muss zwischen :min & :max Elemente haben."},boolean:":attribute muss entweder true oder false sein.",confirmed:":attribute stimmt nicht mit der Bestätigung überein.",date:":attribute muss ein gültiges Datum sein.",date_format:":attribute entspricht nicht dem gültigen Format für :format.",date_equals:":attribute muss ein Datum gleich :date sein.",different:":attribute und :other müssen sich unterscheiden.",digits:":attribute muss :digits Stellen haben.",digits_between:":attribute muss zwischen :min und :max Stellen haben.",dimensions:":attribute hat ungültige Bildabmessungen.",distinct:":attribute beinhaltet einen bereits vorhandenen Wert.",email:":attribute muss eine gültige E-Mail-Adresse sein.",exists:"Der gewählte Wert für :attribute ist ungültig.",file:":attribute muss eine Datei sein.",filled:":attribute muss ausgefüllt sein.",gt:{numeric:":attribute muss größer als :value sein.",file:":attribute muss größer als :value Kilobytes sein.",string:":attribute muss länger als :value Zeichen sein.",array:":attribute muss mehr als :value Elemente haben."},gte:{numeric:":attribute muss größer oder gleich :value sein.",file:":attribute muss größer oder gleich :value Kilobytes sein.",string:":attribute muss mindestens :value Zeichen lang sein.",array:":attribute muss mindestens :value Elemente haben."},image:":attribute muss ein Bild sein.",in:"Der gewählte Wert für :attribute ist ungültig.",in_array:"Der gewählte Wert für :attribute kommt nicht in :other vor.",integer:":attribute muss eine ganze Zahl sein.",ip:":attribute muss eine gültige IP-Adresse sein.",ipv4:":attribute muss eine gültige IPv4-Adresse sein.",ipv6:":attribute muss eine gültige IPv6-Adresse sein.",json:":attribute muss ein gültiger JSON-String sein.",lt:{numeric:":attribute muss kleiner als :value sein.",file:":attribute muss kleiner als :value Kilobytes sein.",string:":attribute muss kürzer als :value Zeichen sein.",array:":attribute muss weniger als :value Elemente haben."},lte:{numeric:":attribute muss kleiner oder gleich :value sein.",file:":attribute muss kleiner oder gleich :value Kilobytes sein.",string:":attribute darf maximal :value Zeichen lang sein.",array:":attribute darf maximal :value Elemente haben."},max:{numeric:":attribute darf maximal :max sein.",file:":attribute darf maximal :max Kilobytes groß sein.",string:":attribute darf maximal :max Zeichen haben.",array:":attribute darf maximal :max Elemente haben."},mimes:":attribute muss den Dateityp :values haben.",mimetypes:":attribute muss den Dateityp :values haben.",min:{numeric:":attribute muss mindestens :min sein.",file:":attribute muss mindestens :min Kilobytes groß sein.",string:":attribute muss mindestens :min Zeichen lang sein.",array:":attribute muss mindestens :min Elemente haben."},not_in:"Der gewählte Wert für :attribute ist ungültig.",not_regex:":attribute hat ein ungültiges Format.",numeric:":attribute muss eine Zahl sein.",present:":attribute muss vorhanden sein.",regex:":attribute Format ist ungültig.",required:":attribute muss ausgefüllt werden.",required_if:":attribute muss ausgefüllt werden, wenn :other den Wert :value hat.",required_unless:":attribute muss ausgefüllt werden, wenn :other nicht den Wert :values hat.",required_with:":attribute muss ausgefüllt werden, wenn :values ausgefüllt wurde.",required_with_all:":attribute muss ausgefüllt werden, wenn :values ausgefüllt wurde.",required_without:":attribute muss ausgefüllt werden, wenn :values nicht ausgefüllt wurde.",required_without_all:":attribute muss ausgefüllt werden, wenn keines der Felder :values ausgefüllt wurde.",same:":attribute und :other müssen übereinstimmen.",size:{numeric:":attribute muss gleich :size sein.",file:":attribute muss :size Kilobyte groß sein.",string:":attribute muss :size Zeichen lang sein.",array:":attribute muss genau :size Elemente haben."},string:":attribute muss ein String sein.",timezone:":attribute muss eine gültige Zeitzone sein.",unique:":attribute ist bereits vergeben.",uploaded:":attribute konnte nicht hochgeladen werden.",url:":attribute muss eine URL sein.",uuid:":attribute muss ein UUID sein.",remote:"Das Feld :attribute ist ungültig."}},a={vueform:{elements:{list:{add:"+ Add",remove:"&times;"},file:{defaultName:"File",dndTitle:"Upload file",dndDescription:"Drop file or click here to upload",removeConfirm:"By removing the file it will be permanently deleted. Are you sure to continue?",select:"Select file",upload:"Upload"},multifile:{uploadButton:"Upload files",dndTitle:"Upload files",dndDescription:"Drop files or click here to upload"},gallery:{uploadButton:"Upload images",dndTitle:"Upload images",dndDescription:"Drop images or click here to upload"}},steps:{finish:"Finish",next:"Next",previous:"Previous"},editor:{acceptedMimesError:"Accepted mimes are: :mimes",acceptedExtensionsError:"Accepted extenions are: :extensions"},datepicker:{weekdays:{shorthand:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],longhand:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},months:{shorthand:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],longhand:["January","February","March","April","May","June","July","August","September","October","November","December"]},daysInMonth:[31,28,31,30,31,30,31,31,30,31,30,31],firstDayOfWeek:0,ordinal:function(e){var t=e%100;if(t>3&&t<21)return"th";switch(t%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}},rangeSeparator:" to ",weekAbbreviation:"Wk",scrollTitle:"Scroll to increment",toggleTitle:"Click to toggle",amPM:["AM","PM"],yearAriaLabel:"Year",monthAriaLabel:"Month",hourAriaLabel:"Hour",minuteAriaLabel:"Minute"},dateFormats:{datetimeSeconds24:"YYYY-MM-DD HH:mm:ss",datetimeSeconds12:"YYYY-MM-DD hh:mm:ss a",datetime24:"YYYY-MM-DD HH:mm",datetime12:"YYYY-MM-DD hh:mm a",timeSeconds24:"HH:mm:ss",timeSeconds12:"hh:mm:ss a",time24:"HH:mm",time12:"hh:mm a",date:"YYYY-MM-DD"},multiselect:{multipleLabelOne:"1 option selected",multipleLabelMore:":options options selected",noResults:"No options found",noOptions:"The list is empty"},defaultMessage:"Invalid field",a11y:{file:{description:"Press Backspace to remove"},list:{remove:"Remove item button"}}},validation:{accepted:"The :attribute must be accepted.",active_url:"The :attribute is not a valid URL.",after:"The :attribute must be a date after :date.",after_or_equal:"The :attribute must be a date after or equal to :date.",alpha:"The :attribute may only contain letters.",alpha_dash:"The :attribute may only contain letters, numbers, dashes and underscores.",alpha_num:"The :attribute may only contain letters and numbers.",array:"The :attribute must be an array.",before:"The :attribute must be a date before :date.",before_or_equal:"The :attribute must be a date before or equal to :date.",between:{numeric:"The :attribute must be between :min and :max.",file:"The :attribute must be between :min and :max kilobytes.",string:"The :attribute must be between :min and :max characters.",array:"The :attribute must have between :min and :max items."},boolean:"The :attribute field must be true or false.",confirmed:"The :attribute confirmation does not match.",date:"The :attribute is not a valid date.",date_format:"The :attribute does not match the format :format.",date_equals:"The :attribute must be equal to :date.",different:"The :attribute and :other must be different.",digits:"The :attribute must be :digits digits.",digits_between:"The :attribute must be between :min and :max digits.",dimensions:"The :attribute has invalid image dimensions.",distinct:"The :attribute field has a duplicate value.",email:"The :attribute must be a valid email address.",exists:"The selected :attribute is invalid.",file:"The :attribute must be a file.",filled:"The :attribute field must have a value.",gt:{numeric:"The :attribute must be greater than :value.",file:"The :attribute must be greater than :value kilobytes.",string:"The :attribute must be greater than :value characters.",array:"The :attribute must have more than :value items."},gte:{numeric:"The :attribute must be greater than or equal :value.",file:"The :attribute must be greater than or equal :value kilobytes.",string:"The :attribute must be greater than or equal :value characters.",array:"The :attribute must have :value items or more."},image:"The :attribute must be an image.",in:"The selected :attribute is invalid.",in_array:"The :attribute field does not exist in :other.",integer:"The :attribute must be an integer.",ip:"The :attribute must be a valid IP address.",ipv4:"The :attribute must be a valid IPv4 address.",ipv6:"The :attribute must be a valid IPv6 address.",json:"The :attribute must be a valid JSON string.",lt:{numeric:"The :attribute must be less than :value.",file:"The :attribute must be less than :value kilobytes.",string:"The :attribute must be less than :value characters.",array:"The :attribute must have less than :value items."},lte:{numeric:"The :attribute must be less than or equal :value.",file:"The :attribute must be less than or equal :value kilobytes.",string:"The :attribute must be less than or equal :value characters.",array:"The :attribute must not have more than :value items."},max:{numeric:"The :attribute may not be greater than :max.",file:"The :attribute may not be greater than :max kilobytes.",string:"The :attribute may not be greater than :max characters.",array:"The :attribute may not have more than :max items."},mimes:"The :attribute must be a file of type: :values.",mimetypes:"The :attribute must be a file of type: :values.",min:{numeric:"The :attribute must be at least :min.",file:"The :attribute must be at least :min kilobytes.",string:"The :attribute must be at least :min characters.",array:"The :attribute must have at least :min items."},not_in:"The selected :attribute is invalid.",not_regex:"The :attribute format is invalid.",numeric:"The :attribute must be a number.",present:"The :attribute field must be present.",regex:"The :attribute format is invalid.",required:"The :attribute field is required.",required_if:"The :attribute field is required when :other is :value.",required_unless:"The :attribute field is required unless :other is in :values.",required_with:"The :attribute field is required when :values is present.",required_with_all:"The :attribute field is required when :values are present.",required_without:"The :attribute field is required when :values is not present.",required_without_all:"The :attribute field is required when none of :values are present.",same:"The :attribute and :other must match.",size:{numeric:"The :attribute must be :size.",file:"The :attribute must be :size kilobytes.",string:"The :attribute must be :size characters.",array:"The :attribute must contain :size items."},string:"The :attribute must be a string.",timezone:"The :attribute must be a valid zone.",unique:"The :attribute has already been taken.",uploaded:"The :attribute failed to upload.",url:"The :attribute format is invalid.",uuid:"The :attribute must be a valid UUID.",remote:"The :attribute field is invalid."}},r={vueform:{elements:{list:{add:"+ Ajoutez le ficher",remove:"&times;"},file:{defaultName:"Fichier",dndTitle:"Téléchargez le fichier",dndDescription:"Déposez le ficher ou cliquez ici pour le télécharger.",removeConfirm:"En supprimant le fichier, il sera définitivement supprimé. Êtes-vous sûr de vouloir procéder ?",select:"Télécharger les fichiers.",upload:"Télécharger"},multifile:{uploadButton:"Télécharger les fichiers.",dndTitle:"Télécharger les fichiers.",dndDescription:"Déposer les fichiers ou cliquer ici pour les télécharger. Télécharger des images."},gallery:{uploadButton:"Importer des images",dndTitle:"Importer des images",dndDescription:"Glisser des images ou cliquer ici pour les télécharger"}},steps:{finish:"Terminer",next:"Suivant",previous:"Précédent"},editor:{acceptedMimesError:"Les mimes acceptés sont: :mimes",acceptedExtensionsError:"Les extensions acceptées sont: :extensions"},datepicker:{weekdays:{shorthand:["dim","lun","mar","mer","jeu","ven","sam"],longhand:["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"]},months:{shorthand:["janv","févr","mars","avr","mai","juin","juil","août","sept","oct","nov","déc"],longhand:["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"]},daysInMonth:[31,28,31,30,31,30,31,31,30,31,30,31],firstDayOfWeek:1,ordinal:function(e){return e>1?"":"er"},rangeSeparator:" au ",weekAbbreviation:"Sem",scrollTitle:"Défiler pour augmenter la valeur",toggleTitle:"Cliquer pour basculer",amPM:["AM","PM"],yearAriaLabel:"Year",monthAriaLabel:"Month",hourAriaLabel:"Hour",minuteAriaLabel:"Minute"},dateFormats:{datetimeSeconds24:"DD/MM/YYYY, HH:mm:ss",datetimeSeconds12:"DD/MM/YYYY, hh:mm:ss a",datetime24:"DD/MM/YYYY, HH:mm",datetime12:"DD/MM/YYYY, hh:mm a",timeSeconds24:"HH:mm:ss",timeSeconds12:"hh:mm:ss a",time24:"HH:mm",time12:"hh:mm a",date:"DD/MM/YYYY"},multiselect:{multipleLabelOne:"1 option sélectionnée",multipleLabelMore:":options options sélectionnées",noResults:"Aucunes options trouvées",noOptions:"La liste est vide"},defaultMessage:"Champ invalide",a11y:{file:{description:"Press Backspace to remove"},list:{remove:"Remove item button"}}},validation:{accepted:":attribute ha de ser acceptat.",active_url:":attribute no és un URL vàlid.",after:":attribute ha de ser una data posterior a :date.",after_or_equal:":attribute ha de ser una data posterior o igual a :date.",alpha:":attribute només pot contenir lletres.",alpha_dash:":attribute només pot contenir lletres, números i guions.",alpha_num:":attribute només pot contenir lletres i números.",array:":attribute ha de ser una matriu.",before:":attribute ha de ser una data anterior a :date.",before_or_equal:":attribute ha de ser una data anterior o igual a :date.",between:{numeric:":attribute ha destar entre :min - :max.",file:":attribute ha de pesar entre :min - :max kilobytes.",string:":attribute ha de tenir entre :min - :max caràcters.",array:":attribute ha de tenir entre :min - :max ítems."},boolean:"El camp :attribute ha de ser verdader o fals",confirmed:"La confirmació de :attribute no coincideix.",date:":attribute no és una data vàlida.",date_format:"El camp :attribute no concorda amb el format :format.",date_equals:"El :attribute ha de ser una data igual a :date.",different:":attribute i :other han de ser diferents.",digits:":attribute ha de tenir :digits dígits.",digits_between:":attribute ha de tenir entre :min i :max dígits.",dimensions:"Les dimensions de la imatge :attribute no són vàlides.",distinct:"El camp :attribute té un valor duplicat.",email:":attribute no és un e-mail vàlid",exists:":attribute és invàlid.",file:"El camp :attribute ha de ser un arxiu.",filled:"El camp :attribute és obligatori.",gt:{numeric:"El :attribute ha de ser superior a :value.",file:"El :attribute ha de ser superior a :value kilobytes.",string:"El :attribute ha de superar els :value caràcters.",array:"El :attribute ha de tenir més de :value ítems."},gte:{numeric:"El :attribute ha de ser igual o superior a :value.",file:"El :attribute ha de ser igual o superior a :value kilobytes.",string:"El :attribute ha de ser igual o superior a :value caràcters.",array:"El :attribute ha de tenir :value ítems o més."},image:":attribute ha de ser una imatge.",in:":attribute és invàlid",in_array:"El camp :attribute no existeix dintre de :other.",integer:":attribute ha de ser un nombre enter.",ip:":attribute ha de ser una adreça IP vàlida.",ipv4:":attribute ha de ser una adreça IPv4 vàlida.",ipv6:":attribute ha de ser una adreça IPv6 vàlida.",json:"El camp :attribute ha de ser una cadena JSON vàlida.",lt:{numeric:"El :attribute ha de ser inferior a :value.",file:"El :attribute ha de ser inferior a :value kilobytes.",string:"El :attribute no ha de superar els :value caràcters.",array:"El :attribute ha de tenir menys de :value ítems."},lte:{numeric:"El :attribute ha de ser igual o inferior a :value.",file:"El :attribute ha de ser igual o inferior a :value kilobytes.",string:"El :attribute ha de ser igual o inferior a :value caràcters.",array:"El :attribute no ha de tenir més de :value ítems."},max:{numeric:":attribute no pot ser més gran que :max.",file:":attribute no pot ser més gran que :max kilobytes.",string:":attribute no pot ser més gran que :max caràcters.",array:":attribute no pot tenir més de :max ítems."},mimes:":attribute ha de ser un arxiu amb format: :values.",mimetypes:":attribute ha de ser un arxiu amb format: :values.",min:{numeric:"El tamany de :attribute ha de ser dalmenys :min.",file:"El tamany de :attribute ha de ser dalmenys :min kilobytes.",string:":attribute ha de contenir almenys :min caràcters.",array:":attribute ha de tenir almenys :min ítems."},not_in:":attribute és invàlid.",not_regex:"El format de :attribute no és vàlid.",numeric:":attribute ha de ser numèric.",present:"The :attribute field must be present.",regex:"El format de :attribute és invàlid.",required:"El camp :attribute és obligatori.",required_if:"The :attribute field is required when :other is :value.",required_unless:"The :attribute field is required unless :other is in :values.",required_with:"The :attribute field is required when :values is present.",required_with_all:"The :attribute field is required when :values are present.",required_without:"The :attribute field is required when :values is not present.",required_without_all:"The :attribute field is required when none of :values are present.",same:":attribute i :other han de coincidir.",size:{numeric:"El tamany de :attribute ha de ser :size.",file:"El tamany de :attribute ha de ser :size kilobytes.",string:":attribute ha de contenir :size caràcters.",array:":attribute ha de contenir :size ítems."},string:"El camp :attribute ha de ser una cadena.",timezone:"El camp :attribute ha de ser una zona vàlida.",unique:":attribute ja està registrat i no es pot repetir.",uploaded:"The :attribute failed to upload.",url:":attribute no és una adreça web vàlida.",uuid:"El :attribute ha de ser un indentificador únic universal (UUID) vàlid.",remote:"The :attribute field is invalid."}},n={vueform:{elements:{list:{add:"+ Toevoegen",remove:"&times;"},file:{defaultName:"Bestand",dndTitle:"Bestand uploaden",dndDescription:"Sleep het bestand of klik hier om te uploaden",removeConfirm:"Door het bestand te verwijderen, wordt het permanent verwijderd. Weet u zeker dat u hiermee door wilt gaan?",select:"Selecteer bestand",upload:"Uploaden"},multifile:{uploadButton:"Bestanden uploaden",dndTitle:"Bestanden uploaden",dndDescription:"Sleep bestanden of klik hier om te uploaden"},gallery:{uploadButton:"Afbeeldingen uploaden",dndTitle:"Afbeeldingen uploaden",dndDescription:"Sleep afbeeldingen of klik hier om te uploaden"}},steps:{finish:"Voltooi",next:"Volgende",previous:"Vorige"},editor:{acceptedMimesError:"Geaccepteerde MIME-types zijn: :mimes",acceptedExtensionsError:"Geaccepteerde extensies zijn: :extensions"},datepicker:{weekdays:{shorthand:["zo","ma","di","wo","do","vr","za"],longhand:["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"]},months:{shorthand:["jan","feb","mrt","apr","mei","jun","jul","aug","sept","okt","nov","dec"],longhand:["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"]},daysInMonth:[31,28,31,30,31,30,31,31,30,31,30,31],firstDayOfWeek:1,ordinal:function(e){return e===1||e===8||e>=20?"ste":"de"},rangeSeparator:" t/m ",weekAbbreviation:"wk",scrollTitle:"Scroll voor volgende / vorige",toggleTitle:"Klik om te wisselen",amPM:["AM","PM"],yearAriaLabel:"Year",monthAriaLabel:"Month",hourAriaLabel:"Hour",minuteAriaLabel:"Minute"},dateFormats:{datetimeSeconds24:"DD-MM-YYYY HH:mm:ss",datetimeSeconds12:"DD-MM-YYYY hh:mm:ss a",datetime24:"DD-MM-YYYY HH:mm",datetime12:"DD-MM-YYYY hh:mm a",timeSeconds24:"HH:mm:ss",timeSeconds12:"hh:mm:ss a",time24:"HH:mm",time12:"hh:mm a",date:"DD-MM-YYYY"},multiselect:{multipleLabelOne:"1 optie geselecteerd",multipleLabelMore:":options opties geselecteerd",noResults:"Geen opties gevonden",noOptions:"Deze lijst is leeg"},defaultMessage:"Ongeldig veld",a11y:{file:{description:"Press Backspace to remove"},list:{remove:"Remove item button"}}},validation:{accepted:":Attribute moet geaccepteerd zijn.",active_url:":Attribute is geen geldige URL.",after:":Attribute moet een datum na :date zijn.",after_or_equal:":Attribute moet een datum na of gelijk aan :date zijn.",alpha:":Attribute mag alleen letters bevatten.",alpha_dash:":Attribute mag alleen letters, nummers, underscores (_) en streepjes (-) bevatten.",alpha_num:":Attribute mag alleen letters en nummers bevatten.",array:":Attribute moet geselecteerde elementen bevatten.",before:":Attribute moet een datum voor :date zijn.",before_or_equal:":Attribute moet een datum voor of gelijk aan :date zijn.",between:{numeric:":Attribute moet tussen :min en :max zijn.",file:":Attribute moet tussen :min en :max kilobytes zijn.",string:":Attribute moet tussen :min en :max karakters zijn.",array:":Attribute moet tussen :min en :max items bevatten."},boolean:":Attribute moet ja of nee zijn.",confirmed:":Attribute bevestiging komt niet overeen.",date:":Attribute moet een datum bevatten.",date_format:":Attribute moet een geldig datum formaat bevatten.",date_equals:":Attribute moet een datum gelijk aan :date zijn.",different:":Attribute en :other moeten verschillend zijn.",digits:":Attribute moet bestaan uit :digits cijfers.",digits_between:":Attribute moet bestaan uit minimaal :min en maximaal :max cijfers.",dimensions:":Attribute heeft geen geldige afmetingen voor afbeeldingen.",distinct:":Attribute heeft een dubbele waarde.",email:":Attribute is geen geldig e-mailadres.",exists:":Attribute bestaat niet.",file:":Attribute moet een bestand zijn.",filled:":Attribute is verplicht.",gt:{numeric:"De :attribute moet groter zijn dan :value.",file:"De :attribute moet groter zijn dan :value kilobytes.",string:"De :attribute moet meer dan :value tekens bevatten.",array:"De :attribute moet meer dan :value waardes bevatten."},gte:{numeric:"De :attribute moet groter of gelijk zijn aan :value.",file:"De :attribute moet groter of gelijk zijn aan :value kilobytes.",string:"De :attribute moet minimaal :value tekens bevatten.",array:"De :attribute moet :value waardes of meer bevatten."},image:":Attribute moet een afbeelding zijn.",in:":Attribute is ongeldig.",in_array:":Attribute bestaat niet in :other.",integer:":Attribute moet een getal zijn.",ip:":Attribute moet een geldig IP-adres zijn.",ipv4:":Attribute moet een geldig IPv4-adres zijn.",ipv6:":Attribute moet een geldig IPv6-adres zijn.",json:":Attribute moet een geldige JSON-string zijn.",lt:{numeric:"De :attribute moet kleiner zijn dan :value.",file:"De :attribute moet kleiner zijn dan :value kilobytes.",string:"De :attribute moet minder dan :value tekens bevatten.",array:"De :attribute moet minder dan :value waardes bevatten."},lte:{numeric:"De :attribute moet kleiner of gelijk zijn aan :value.",file:"De :attribute moet kleiner of gelijk zijn aan :value kilobytes.",string:"De :attribute moet maximaal :value tekens bevatten.",array:"De :attribute moet :value waardes of minder bevatten."},max:{numeric:":Attribute mag niet hoger dan :max zijn.",file:":Attribute mag niet meer dan :max kilobytes zijn.",string:":Attribute mag niet uit meer dan :max tekens bestaan.",array:":Attribute mag niet meer dan :max items bevatten."},mimes:":Attribute moet een bestand zijn van het bestandstype :values.",mimetypes:":Attribute moet een bestand zijn van het bestandstype :values.",min:{numeric:":Attribute moet minimaal :min zijn.",file:":Attribute moet minimaal :min kilobytes zijn.",string:":Attribute moet minimaal :min tekens zijn.",array:":Attribute moet minimaal :min items bevatten."},not_in:"Het formaat van :attribute is ongeldig.",not_regex:"De :attribute formaat is ongeldig.",numeric:":Attribute moet een nummer zijn.",present:"The :attribute field must be present.",regex:":Attribute formaat is ongeldig.",required:":Attribute is verplicht.",required_if:"The :attribute field is required when :other is :value.",required_unless:"The :attribute field is required unless :other is in :values.",required_with:"The :attribute field is required when :values is present.",required_with_all:"The :attribute field is required when :values are present.",required_without:"The :attribute field is required when :values is not present.",required_without_all:"The :attribute field is required when none of :values are present.",same:":Attribute en :other moeten overeenkomen.",size:{numeric:":Attribute moet :size zijn.",file:":Attribute moet :size kilobyte zijn.",string:":Attribute moet :size tekens zijn.",array:":Attribute moet :size items bevatten."},string:":Attribute moet een tekst zijn.",timezone:":Attribute moet een geldige tijdzone zijn.",unique:":Attribute is al in gebruik.",uploaded:"The :attribute failed to upload.",url:":Attribute moet een geldig URL zijn.",uuid:":Attribute moet een geldig UUID zijn.",remote:"The :attribute field is invalid."}},s={vueform:{elements:{list:{add:"+ Добавлять",remove:"&times;"},file:{defaultName:"Файл",dndTitle:"Загрузить файл",dndDescription:"Перетащите файл или нажмите здесь, чтобы загрузить",removeConfirm:"При удалении файла он будет окончательно удален. Вы уверены, что продолжите?",select:"Выберите файл",upload:"Закачать"},multifile:{uploadButton:"Загрузка файлов",dndTitle:"Загрузка файлов",dndDescription:"Перетащите файлы или нажмите здесь, чтобы загрузить"},gallery:{uploadButton:"Загрузка изображений",dndTitle:"Загрузка изображений",dndDescription:"Перетащите изображения или нажмите здесь, чтобы загрузить"}},steps:{finish:"Заканчивать",next:"Следующий",previous:"Предыдущий"},editor:{acceptedMimesError:"Принятые мимы: :mimes",acceptedExtensionsError:"Принятые исключения: :extensions"},datepicker:{weekdays:{shorthand:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],longhand:["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"]},months:{shorthand:["Янв","Фев","Март","Апр","Май","Июнь","Июль","Авг","Сен","Окт","Ноя","Дек"],longhand:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"]},daysInMonth:[31,28,31,30,31,30,31,31,30,31,30,31],firstDayOfWeek:1,ordinal:function(){return""},rangeSeparator:" — ",weekAbbreviation:"Нед.",scrollTitle:"Прокрутите для увеличения",toggleTitle:"Нажмите для переключения",amPM:["ДП","ПП"],yearAriaLabel:"Год",monthAriaLabel:"Month",hourAriaLabel:"Hour",minuteAriaLabel:"Minute"},dateFormats:{datetimeSeconds24:"DD.MM.YYYY, HH:mm:ss",datetimeSeconds12:"DD.MM.YYYY, hh:mm:ss a",datetime24:"DD.MM.YYYY, HH:mm",datetime12:"DD.MM.YYYY, hh:mm a",timeSeconds24:"HH:mm:ss",timeSeconds12:"hh:mm:ss a",time24:"HH:mm",time12:"hh:mm a",date:"DD.MM.YYYY"},multiselect:{multipleLabelOne:"Выбран 1 вариант",multipleLabelMore:":options выбранные параметры",noResults:"Параметры не найдены",noOptions:"Список пуст"},defaultMessage:"Недопустимое поле",a11y:{file:{description:"Press Backspace to remove"},list:{remove:"Remove item button"}}},validation:{accepted:"Вы должны принять :attribute.",active_url:"Значение поля :attribute не является действительным URL.",after:"Значение поля :attribute должно быть датой после :date.",after_or_equal:"Значение поля :attribute должно быть датой после или равной :date.",alpha:"Значение поля :attribute может содержать только буквы.",alpha_dash:"Значение поля :attribute может содержать только буквы, цифры, дефис и нижнее подчеркивание.",alpha_num:"Значение поля :attribute может содержать только буквы и цифры.",array:"Значение поля :attribute должно быть массивом.",before:"Значение поля :attribute должно быть датой до :date.",before_or_equal:"Значение поля :attribute должно быть датой до или равной :date.",between:{numeric:"Значение поля :attribute должно быть между :min и :max.",file:"Размер файла в поле :attribute должен быть между :min и :max Килобайт(а).",string:"Количество символов в поле :attribute должно быть между :min и :max.",array:"Количество элементов в поле :attribute должно быть между :min и :max."},boolean:"Значение поля :attribute должно быть логического типа.",confirmed:"Значение поля :attribute не совпадает с подтверждаемым.",date:"Значение поля :attribute не является датой.",date_format:"Значение поля :attribute не соответствует формату даты :format.",date_equals:"Значение поля :attribute должно быть датой равной :date.",different:"Значения полей :attribute и :other должны различаться.",digits:"Длина значения цифрового поля :attribute должна быть :digits.",digits_between:"Длина значения цифрового поля :attribute должна быть между :min и :max.",dimensions:"Изображение в поле :attribute имеет недопустимые размеры.",distinct:"Значения поля :attribute не должны повторяться.",email:"Значение поля :attribute должно быть действительным электронным адресом.",exists:"Выбранное значение для :attribute некорректно.",file:"В поле :attribute должен быть указан файл.",filled:"Поле :attribute обязательно для заполнения.",gt:{numeric:"Значение поля :attribute должно быть больше :value.",file:"Размер файла в поле :attribute должен быть больше :value Килобайт(а).",string:"Количество символов в поле :attribute должно быть больше :value.",array:"Количество элементов в поле :attribute должно быть больше :value."},gte:{numeric:"Значение поля :attribute должно быть :value или больше.",file:"Размер файла в поле :attribute должен быть :value Килобайт(а) или больше.",string:"Количество символов в поле :attribute должно быть :value или больше.",array:"Количество элементов в поле :attribute должно быть :value или больше."},image:"Файл в поле :attribute должен быть изображением.",in:"Выбранное значение для :attribute некорректно.",in_array:"Значение поля :attribute не существует в :other.",integer:"Значение поля :attribute должно быть целым числом.",ip:"Значение поля :attribute должно быть действительным IP-адресом.",ipv4:"Значение поля :attribute должно быть действительным IPv4-адресом.",ipv6:"Значение поля :attribute должно быть действительным IPv6-адресом.",json:"Значение поля :attribute должно быть JSON строкой.",lt:{numeric:"Значение поля :attribute должно быть меньше :value.",file:"Размер файла в поле :attribute должен быть меньше :value Килобайт(а).",string:"Количество символов в поле :attribute должно быть меньше :value.",array:"Количество элементов в поле :attribute должно быть меньше :value."},lte:{numeric:"Значение поля :attribute должно быть :value или меньше.",file:"Размер файла в поле :attribute должен быть :value Килобайт(а) или меньше.",string:"Количество символов в поле :attribute должно быть :value или меньше.",array:"Количество элементов в поле :attribute должно быть :value или меньше."},max:{numeric:"Значение поля :attribute не может быть больше :max.",file:"Размер файла в поле :attribute не может быть больше :max Килобайт(а).",string:"Количество символов в поле :attribute не может превышать :max.",array:"Количество элементов в поле :attribute не может превышать :max."},mimes:"Файл в поле :attribute должен быть одного из следующих типов: :values.",mimetypes:"Файл в поле :attribute должен быть одного из следующих типов: :values.",min:{numeric:"Значение поля :attribute должно быть не меньше :min.",file:"Размер файла в поле :attribute должен быть не меньше :min Килобайт(а).",string:"Количество символов в поле :attribute должно быть не меньше :min.",array:"Количество элементов в поле :attribute должно быть не меньше :min."},not_in:"Выбранное значение для :attribute некорректно.",not_regex:"Значение поля :attribute некорректно.",numeric:"Значение поля :attribute должно быть числом.",present:"The :attribute field must be present.",regex:"Значение поля :attribute некорректно.",required:"Поле :attribute обязательно для заполнения.",required_if:"The :attribute field is required when :other is :value.",required_unless:"The :attribute field is required unless :other is in :values.",required_with:"The :attribute field is required when :values is present.",required_with_all:"The :attribute field is required when :values are present.",required_without:"The :attribute field is required when :values is not present.",required_without_all:"The :attribute field is required when none of :values are present.",same:"Значения полей :attribute и :other должны совпадать.",size:{numeric:"Значение поля :attribute должно быть равным :size.",file:"Размер файла в поле :attribute должен быть равен :size Килобайт(а).",string:"Количество символов в поле :attribute должно быть равным :size.",array:"Количество элементов в поле :attribute должно быть равным :size."},string:"Значение поля :attribute должно быть строкой.",timezone:"Значение поля :attribute должно быть действительным часовым поясом.",unique:"Такое значение поля :attribute уже существует.",uploaded:"The :attribute failed to upload.",url:"Значение поля :attribute имеет ошибочный формат URL.",uuid:"Значение поля :attribute должно быть корректным UUID.",remote:"The :attribute field is invalid."}};export{i as d,a as e,r as f,n,s as r};