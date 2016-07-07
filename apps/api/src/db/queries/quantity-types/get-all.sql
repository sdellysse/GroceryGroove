WITH my_quantity_types AS (
    SELECT
        quantity_type_id,
        singular_name,
        plural_name,
        singular_abbreviation,
        plural_abbreviation
    FROM quantity_types
    ORDER BY singular_name
)

SELECT DISTINCT ON (
    singular_name,
    plural_name,
    singular_abbreviation,
    plural_abbreviation
)
    *
FROM my_quantity_types
ORDER BY
    singular_name,
    plural_name,
    singular_abbreviation,
    plural_abbreviation,
    household_id NULLS LAST