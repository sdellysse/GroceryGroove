-- rambler up
CREATE TABLE quantity_types(
    quantity_type_id      SERIAL,
    household_id          INTEGER     NULL,
    singular_name         TEXT    NOT NULL,
    plural_name           TEXT    NOT NULL,
    singular_abbreviation TEXT        NULL,
    plural_abbreviation   TEXT        NULL,

    CONSTRAINT unique_quanity_type_singular_name                UNIQUE(household_id, singular_name) WHERE household_id IS NOT NULL,
    CONSTRAINT unique_quanity_type_singular_name_null           UNIQUE(singular_name) WHERE household_id IS NULL,
    CONSTRAINT unique_quanity_type_plural_name                  UNIQUE(household_id, plural_name) WHERE household_id IS NOT NULL,
    CONSTRAINT unique_quanity_type_plural_name_null             UNIQUE(plural_name) WHERE household_id IS NULL,
    CONSTRAINT unique_quanity_type_singular_abbreviation        UNIQUE(household_id, singular_abbreviation) WHERE household_id IS NOT NULL,
    CONSTRAINT unique_quanity_type_singular_abbreviation_null   UNIQUE(singular_abbreviation) WHERE household_id IS NULL,
    CONSTRAINT unique_quanity_type_plural_abbreviation          UNIQUE(household_id, plural_abbreviation) WHERE household_id IS NOT NULL,
    CONSTRAINT unique_quanity_type_plural_abbreviation_null     UNIQUE(plural_abbreviation) WHERE household_id IS NULL,

    FOREIGN KEY(household_id) REFERENCES households(household_id)
        ON UPDATE CASCADE
        ON DELETE CASCADE
    ,

    PRIMARY KEY(quantity_type_id)
);

INSERT INTO quantity_types
(singular_name, plural_name, singular_abbreviation, plural_abbreviation) VALUES
('piece',       'pieces',    'pc',                  'pcs'              ),
('cup',         'cups',      NULL,                  NULL               ),
('gallon',      'gallons',   'gal',                 NULL               ),
('ounce',       'ounces',    'oz',                  NULL               ),
('pint',        'pints',     'pt',                  NULL               ),
('quart',       'quarts',    'qt',                  NULL               ),
('pound',       'pounds',    'lb',                  'lbs'              ),
('liter',       'liters',    'l',                   NULL               ),
('gram',        'grams',     'g',                   NULL               );

-- rambler down
DROP TABLE quantity_types;
