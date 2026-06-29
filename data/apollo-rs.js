// Generated file, do NOT edit

export default [
  {
    "name": "apollo-rs/parser/err/0001_directive_definition_missing_location.graphql",
    "error": true,
    "input": "directive @example on"
  },
  {
    "name": "apollo-rs/parser/err/0002_enum_definition_with_missing_name.graphql",
    "error": true,
    "input": "enum {\n    NORTH\n    EAST\n    SOUTH\n    WEST\n}"
  },
  {
    "name": "apollo-rs/parser/err/0003_enum_definition_with_missing_values.graphql",
    "error": true,
    "input": "enum Direction {\n}"
  },
  {
    "name": "apollo-rs/parser/err/0004_enum_definition_with_missing_curly.graphql",
    "error": true,
    "input": "enum Direction { NORTH WEST"
  },
  {
    "name": "apollo-rs/parser/err/0005_enum_extension_with_missing_name.graphql",
    "error": true,
    "input": "extend enum {\n    NORTH\n    EAST\n}"
  },
  {
    "name": "apollo-rs/parser/err/0006_enum_extension_with_missing_requirements.graphql",
    "error": true,
    "input": "extend enum Direction"
  },
  {
    "name": "apollo-rs/parser/err/0007_fragment_definition_with_invalid_fragment_name.graphql",
    "error": true,
    "input": "fragment on User @example {\n    id\n}"
  },
  {
    "name": "apollo-rs/parser/err/0008_fragment_definition_with_invalid_type_condition.graphql",
    "error": true,
    "input": "fragment friendFields User @example {\n    id\n}"
  },
  {
    "name": "apollo-rs/parser/err/0009_fragment_definition_with_invalid_selection_set.graphql",
    "error": true,
    "input": "fragment friendFields on User"
  },
  {
    "name": "apollo-rs/parser/err/0010_input_definition_with_missing_name.graphql",
    "error": true,
    "input": "input {\n    a: String\n    b: Int!\n}"
  },
  {
    "name": "apollo-rs/parser/err/0011_input_definition_with_missing_input_values.graphql",
    "error": true,
    "input": "input ExampleInputObject {}"
  },
  {
    "name": "apollo-rs/parser/err/0012_input_extension_with_missing_name.graphql",
    "error": true,
    "input": "extend input {\n    a: String\n}"
  },
  {
    "name": "apollo-rs/parser/err/0013_input_extension_with_missing_requirements.graphql",
    "error": true,
    "input": "extend input ExampleInputObject"
  },
  {
    "name": "apollo-rs/parser/err/0014_interface_extension_with_missing_name.graphql",
    "error": true,
    "input": "extend interface {\n    value: Int\n}"
  },
  {
    "name": "apollo-rs/parser/err/0015_interface_extension_with_missing_requirements.graphql",
    "error": true,
    "input": "extend interface ValuedEntity"
  },
  {
    "name": "apollo-rs/parser/err/0016_object_type_extension_with_missing_name.graphql",
    "error": true,
    "input": "extend type {\n    name: String\n    age: Int\n    picture: Url\n}"
  },
  {
    "name": "apollo-rs/parser/err/0017_object_type_extension_with_missing_requirements.graphql",
    "error": true,
    "input": "extend type Person"
  },
  {
    "name": "apollo-rs/parser/err/0018_scalar_definition_with_missing_name.graphql",
    "error": true,
    "input": "scalar @deprecated"
  },
  {
    "name": "apollo-rs/parser/err/0019_scalar_extension_with_missing_name.graphql",
    "error": true,
    "input": "extend scalar @deprecated"
  },
  {
    "name": "apollo-rs/parser/err/0020_union_definition_with_missing_name.graphql",
    "error": true,
    "input": "union = Photo | Person"
  },
  {
    "name": "apollo-rs/parser/err/0021_union_definition_with_missing_union_members.graphql",
    "error": true,
    "input": "union ="
  },
  {
    "name": "apollo-rs/parser/err/0022_union_extension_with_missing_name.graphql",
    "error": true,
    "input": "extend union = Photo | Person"
  },
  {
    "name": "apollo-rs/parser/err/0023_union_extension_with_missing_requirements.graphql",
    "error": true,
    "input": "extend union SearchResult"
  },
  {
    "name": "apollo-rs/parser/err/0024_document_with_incorrect_definition.graphql",
    "error": true,
    "input": "awsas8d2934213hkj0987"
  },
  {
    "name": "apollo-rs/parser/err/0025_document_with_incorrect_definition_and_selection_set.graphql",
    "error": true,
    "input": "uasdf21230jkdw\n\n{\n    pet\n    faveSnack\n}"
  },
  {
    "name": "apollo-rs/parser/err/0026_invalid_definition_squished_between_two_valid_definitions.graphql",
    "error": true,
    "input": "enum Direction @example {\n    \"\"\"\n    description\n    \"\"\"\n    NORTH\n    EAST\n    SOUTH\n    WEST\n}\n\nuasdf21230jkdw\n\n{\n    pet\n    faveSnack\n}"
  },
  {
    "name": "apollo-rs/parser/err/0027_invalid_type_system_extension.graphql",
    "error": true,
    "input": "extend Cat"
  },
  {
    "name": "apollo-rs/parser/err/0028_invalid_type_system_extension_followed_by_valid.graphql",
    "error": true,
    "input": "extend Cat\n\nextend interface NamedEntity {\n    name: String\n}"
  },
  {
    "name": "apollo-rs/parser/err/0029_operation_definition_with_empty_selection_set.graphql",
    "error": true,
    "input": "query {}"
  },
  {
    "name": "apollo-rs/parser/err/0030_operation_definition_with_description.graphql",
    "error": true,
    "input": "\"after this PR this should not be an issue: https://github.com/graphql/graphql-spec/pull/892\"\nquery empty {}"
  },
  {
    "name": "apollo-rs/parser/err/0031_argument_with_erronous_string_value.graphql",
    "error": true,
    "input": "{\n  user(id: \"\\string ID\")\n}"
  },
  {
    "name": "apollo-rs/parser/err/0032_input_value_with_erronous_string_value.graphql",
    "error": true,
    "input": "type Person {\n  name: String\n  picture(reference: \"\\a reference image\"): Url\n}"
  },
  {
    "name": "apollo-rs/parser/err/0033_directive_with_erronous_string_value.graphql",
    "error": true,
    "input": "directive @delegateField(name: String!) repeatable on OBJECT | INTERFACE\n\ntype Book @delegateField(name: \"\\ errronous string \\\"\"){\n  id: ID!\n}"
  },
  {
    "name": "apollo-rs/parser/err/0034_unterminated_string_value_in_list.graphql",
    "error": true,
    "input": "extend schema\n  @link(url: \"https://specs.apollo.dev/federation/v2.0\",\n        import: [\"@key\", \"@external])\n\n\ntype Vehicle @key(fields: \"id\") {\n  id: ID!,\n  type: String,\n  modelCode: String,\n  brandName: String,\n  launchDate: String\n}\n"
  },
  {
    "name": "apollo-rs/parser/err/0035_unterminated_string_value_in_object_value.graphql",
    "error": true,
    "input": "mutation {\n  createStore(draft: {\n    name: [{ locale: \"en\", value: \"my store }]\n  }) {\n    name(locale: \"en\")\n  }\n}"
  },
  {
    "name": "apollo-rs/parser/err/0036_unterminated_string_in_default_value.graphql",
    "error": true,
    "input": "type Person {\n  name: String\n  picture(url: String = \"https://spec.graphql.org/October2021/#DefaultValue): Url\n}"
  },
  {
    "name": "apollo-rs/parser/err/0040_operation_definition_missing_selection_set.graphql",
    "error": true,
    "input": "query __typename }"
  },
  {
    "name": "apollo-rs/parser/err/0041_operation_definition_with_missing_selection_set.graphql",
    "error": true,
    "input": "query __typename"
  },
  {
    "name": "apollo-rs/parser/err/0042_document_with_incorrect_token.graphql",
    "error": true,
    "input": "@\n# comment\n{\n    pet\n    faveSnack\n}\n\n# comment\n}\n\ntype Query {\n    name: String\n}"
  },
  {
    "name": "apollo-rs/parser/err/0043_type_with_trailing_garbage.graphql",
    "error": true,
    "input": "type Person {\n  id: ID!\n  appearedIn: [Film]s\n  name: String\n  directed: [Film]\n}\n"
  },
  {
    "name": "apollo-rs/parser/err/0044_list_type_with_no_type.graphql",
    "error": true,
    "input": "type List {\n  field: [] @coolDirective\n  deepError: [[[Item Type]]]\n}\n"
  },
  {
    "name": "apollo-rs/parser/err/0045_ignored_token_spans.graphql",
    "error": true,
    "input": "cats\n# https://github.com/apollographql/apollo-rs/issues/325\n\ninterface X\n\ncats\ntype Query {\n    name: String\n}\n"
  },
  {
    "name": "apollo-rs/parser/err/0046_incomplete_spreads.graphql",
    "error": true,
    "input": "{ inner { ... }}\n"
  },
  {
    "name": "apollo-rs/parser/err/0047_empty_variable_definition.graphql",
    "error": true,
    "input": "query Op() {\n  field\n}"
  },
  {
    "name": "apollo-rs/parser/err/0048_unbalanced_list_type_1.graphql",
    "error": true,
    "input": "type Query {\n    unbalanced: [[Int]]]\n}\n"
  },
  {
    "name": "apollo-rs/parser/err/0049_unbalanced_list_type_2.graphql",
    "error": true,
    "input": "type Query {\n    unbalanced: [[[Int]]\n}\n"
  },
  {
    "name": "apollo-rs/parser/err/0050_invalid_implements_list.graphql",
    "error": true,
    "input": "type Obj implements A & { field: Int }\n\ntype Obj implements A B { field: Int }\n\ntype Obj implements A && B { field: Int }\n"
  },
  {
    "name": "apollo-rs/parser/err/0051_union_with_invalid_members_list.graphql",
    "error": true,
    "input": "\"Missing separator\"\nunion SearchResult = Photo Person\n\n\"Double separator\"\nunion SearchResult2 = Photo || Person\n\n\"Dangling separator\"\nunion SearchResult3 = | Photo | Person |\n"
  },
  {
    "name": "apollo-rs/parser/err/0052_const_value.graphql",
    "error": true,
    "input": "query(\n    $var1: Boolean!\n    $var2: Boolean! = $var\n) {\n    f1 @include(if: $var1)\n    f2 @include(if: $var2)\n}\n\ndirective @someDir(arg: Boolean) on OBJECT\n\ntype Query @someDir(arg: $var1) {\n    f1: Int\n    f2: Int\n}\n"
  },
  {
    "name": "apollo-rs/parser/err/0053_on_without_type_condition.graphql",
    "error": true,
    "input": "query {\n  ... on {\n    field\n  }\n}\n\nfragment F on {\n  field\n}\n"
  },
  {
    "name": "apollo-rs/parser/err/0054_root_operation_type_with_extra_brackets.graphql",
    "error": true,
    "input": "schema {\n  query: Query\n  { mutation: Mutation\n  { subscription: Subscription\n}\n"
  },
  {
    "name": "apollo-rs/parser/err/0055_object_definition_with_missing_name.graphql",
    "error": true,
    "input": "type  {\n  id: String\n}"
  },
  {
    "name": "apollo-rs/parser/err/0056_object_definition_with_missing_curly.graphql",
    "error": true,
    "input": "type Person { id: String"
  },
  {
    "name": "apollo-rs/parser/err/0057_object_definition_with_missing_fields.graphql",
    "error": true,
    "input": "type Person {\n}"
  },
  {
    "name": "apollo-rs/parser/err/0058_interface_definition_with_missing_name.graphql",
    "error": true,
    "input": "interface {\n  id: String\n}"
  },
  {
    "name": "apollo-rs/parser/err/0059_interface_definition_with_missing_fields.graphql",
    "error": true,
    "input": "interface Person {\n}"
  },
  {
    "name": "apollo-rs/parser/err/0060_interface_definition_with_missing_curly.graphql",
    "error": true,
    "input": "interface Person { id: String"
  },
  {
    "name": "apollo-rs/parser/err/0061_empty.graphql",
    "error": true,
    "input": ""
  },
  {
    "name": "apollo-rs/parser/err/0062_multibyte_japanese_in_type_name.graphql",
    "error": true,
    "input": "type Query { field: 日本語 }\n"
  },
  {
    "name": "apollo-rs/parser/err/0063_multibyte_chinese_in_type_name.graphql",
    "error": true,
    "input": "type Query { field: 中文类型 }\n"
  },
  {
    "name": "apollo-rs/parser/err/0064_multibyte_korean_in_type_name.graphql",
    "error": true,
    "input": "type Query { field: 한글타입 }\n"
  },
  {
    "name": "apollo-rs/parser/err/0065_multibyte_emoji_in_type_name.graphql",
    "error": true,
    "input": "type Query { field: 🦀🚀💡 }\n"
  },
  {
    "name": "apollo-rs/parser/err/0066_multibyte_mixed_ascii_and_cjk.graphql",
    "error": true,
    "input": "type Query { field: Type日本語Name }\n"
  },
  {
    "name": "apollo-rs/parser/err/0067_multibyte_multiple_fields_with_errors.graphql",
    "error": true,
    "input": "type Query { a: 日本語 b: 中文 c: String }\n"
  },
  {
    "name": "apollo-rs/parser/ok/0001_input_type_definition_without_input_values.graphql",
    "error": false,
    "input": "\"An input with no input values\"\ninput AnInputWithoutInputValues\n\nextend input AnInputWithoutInputValues {\n  limit: Int!\n}\n"
  },
  {
    "name": "apollo-rs/parser/ok/0002_selection_simple.graphql",
    "error": false,
    "input": "{\n    pet\n    faveSnack\n}"
  },
  {
    "name": "apollo-rs/parser/ok/0003_selection_with_fields.graphql",
    "error": false,
    "input": "\n{\n    pet {\n        name\n        birthday {\n            month\n            day\n        }\n        playmates {\n            name\n            faveSnack\n        }\n    }\n    faveSnack\n}"
  },
  {
    "name": "apollo-rs/parser/ok/0004_selection_with_fields_aliases_arguments.graphql",
    "error": false,
    "input": "\n{\n    pet {\n        name: nickname\n        birthday {\n            month\n            day\n        }\n        playmates {\n            name\n            faveSnack\n        }\n    }\n    faveSnack(quantity: 4)\n}"
  },
  {
    "name": "apollo-rs/parser/ok/0005_selection_with_inline_fragments.graphql",
    "error": false,
    "input": "{\n    animal\n    faveSnack\n    ... on Pet {\n      playmates {\n        count\n      }\n    }\n}"
  },
  {
    "name": "apollo-rs/parser/ok/0006_selection_with_fragment_spread.graphql",
    "error": false,
    "input": "{\n  pet\n  ...snackSelection\n  ... on Nap {\n    cozyLocation\n    durationOfNap\n  }\n  ...snackSelection @deprecated\n  ... on Nap @provides(duration: \"2 hours\") {\n    cozyLocation\n  }\n  ... @J(N: 0) {\n    a\n  }\n}\n"
  },
  {
    "name": "apollo-rs/parser/ok/0007_directive_definition.graphql",
    "error": false,
    "input": "directive @example on FIELD"
  },
  {
    "name": "apollo-rs/parser/ok/0008_directive_definition_with_arguments.graphql",
    "error": false,
    "input": "directive @example(isTreat: Boolean, treatKind: String) on FIELD | MUTATION"
  },
  {
    "name": "apollo-rs/parser/ok/0009_directive_definition_repeatable.graphql",
    "error": false,
    "input": "directive @example(isTreat: Boolean, treatKind: String) repeatable on FIELD | MUTATION"
  },
  {
    "name": "apollo-rs/parser/ok/0010_enum_type_definition.graphql",
    "error": false,
    "input": "enum Direction @example {\n    \"\"\"\n    description\n    \"\"\"\n    NORTH\n    EAST\n    SOUTH\n    WEST\n}"
  },
  {
    "name": "apollo-rs/parser/ok/0011_enum_type_extension.graphql",
    "error": false,
    "input": "extend enum Direction @example {\n    SOUTH\n    WEST\n}"
  },
  {
    "name": "apollo-rs/parser/ok/0012_fragment_definition.graphql",
    "error": false,
    "input": "fragment friendFields on User @example {\n    id\n    name\n    profilePic(size: 50)\n}"
  },
  {
    "name": "apollo-rs/parser/ok/0013_fragment_definition_with_fragment_spread.graphql",
    "error": false,
    "input": "fragment friendFields on User {\n    id\n    name\n    ...standardProfilePic\n}"
  },
  {
    "name": "apollo-rs/parser/ok/0014_input_definition.graphql",
    "error": false,
    "input": "input ExampleInputObject {\n    a: String\n    b: Int!\n}"
  },
  {
    "name": "apollo-rs/parser/ok/0015_input_extension.graphql",
    "error": false,
    "input": "extend input ExampleInputObject @skip {\n    a: String\n}"
  },
  {
    "name": "apollo-rs/parser/ok/0016_interface_definition.graphql",
    "error": false,
    "input": "interface ValuedEntity {\n    value: Int\n}"
  },
  {
    "name": "apollo-rs/parser/ok/0017_interface_extension.graphql",
    "error": false,
    "input": "extend interface ValuedEntity @skip {\n    value: Int\n}"
  },
  {
    "name": "apollo-rs/parser/ok/0018_object_type_definition.graphql",
    "error": false,
    "input": "\"description of type\"\ntype Person implements Human {\n    \"\"\"\n    description of field\n    \"\"\"\n    name: String\n    age: Int\n    picture: Url\n}"
  },
  {
    "name": "apollo-rs/parser/ok/0019_object_type_extension.graphql",
    "error": false,
    "input": "extend type Person implements Human @deprecated {\n    name: String\n    age: Int\n    picture: Url\n}"
  },
  {
    "name": "apollo-rs/parser/ok/0020_operation_type_definition.graphql",
    "error": false,
    "input": "query myQuery {\n    animal: cat\n    dog {\n        panda {\n            anotherCat @deprecated\n        }\n    }\n    lion\n}"
  },
  {
    "name": "apollo-rs/parser/ok/0021_operation_type_definition_with_arguments.graphql",
    "error": false,
    "input": "query myQuery($var: input $varOther: otherInput){\n    animal\n    treat\n}"
  },
  {
    "name": "apollo-rs/parser/ok/0022_operation_type_definition_with_arguments_and_directives.graphql",
    "error": false,
    "input": "query myQuery($var: input $varOther: otherInput) @deprecated @unused {\n    animal\n    treat\n}"
  },
  {
    "name": "apollo-rs/parser/ok/0023_scalar_definition.graphql",
    "error": false,
    "input": "scalar Time @deprecated"
  },
  {
    "name": "apollo-rs/parser/ok/0024_scalar_extension.graphql",
    "error": false,
    "input": "extend scalar Time @deprecated"
  },
  {
    "name": "apollo-rs/parser/ok/0025_schema_definition.graphql",
    "error": false,
    "input": "schema {\n  query: MyQueryRootType\n  mutation: MyMutationRootType,\n  subscription: MySubscriptionRootType\n}"
  },
  {
    "name": "apollo-rs/parser/ok/0026_schema_extension.graphql",
    "error": false,
    "input": "extend schema @skip @example {\n    query: MyExtendedQueryType\n}"
  },
  {
    "name": "apollo-rs/parser/ok/0027_union_type_definition.graphql",
    "error": false,
    "input": "union SearchResult = Photo | Person\n\nunion MultiLine =\n  | Photo\n  | Person\n"
  },
  {
    "name": "apollo-rs/parser/ok/0028_union_type_definition_followed_by_object_definition.graphql",
    "error": false,
    "input": "union SearchResult = Photo | Person\n\ntype Error {\n    code: Int\n}"
  },
  {
    "name": "apollo-rs/parser/ok/0029_union_type_extension.graphql",
    "error": false,
    "input": "extend union SearchResult @deprecated = Photo | Person"
  },
  {
    "name": "apollo-rs/parser/ok/0030_values.graphql",
    "error": false,
    "input": "{\n    user(\n        id: 4,\n        size: $size\n        value: \"string\",\n        input: [ \"one\", 1.34 ],\n        otherInput: { key: false, output: null }\n        emptyList: []\n        emptyObject: {}\n    )\n}\n"
  },
  {
    "name": "apollo-rs/parser/ok/0031_variables_with_default.graphql",
    "error": false,
    "input": "query getOutput($input: Int = 5 $config: String = \"Config\") {\n    animal\n}"
  },
  {
    "name": "apollo-rs/parser/ok/0032_supergraph.graphql",
    "error": false,
    "input": "schema\n@core(feature: \"https://specs.apollo.dev/core/v0.1\"),\n@core(feature: \"https://specs.apollo.dev/join/v0.1\")\n{\n  query: Query\n  mutation: Mutation\n}\n\ndirective @core(feature: String!) repeatable on SCHEMA\ndirective @join__field(graph: join__Graph, requires: join__FieldSet, provides: join__FieldSet) on FIELD_DEFINITION\ndirective @join__type(graph: join__Graph!, key: join__FieldSet) repeatable on OBJECT | INTERFACE\ndirective @join__owner(graph: join__Graph!) on OBJECT | INTERFACE\ndirective @join__graph(name: String!, url: String!) on ENUM_VALUE\ndirective @stream on FIELD\ndirective @transform(from: String!) on FIELD\n\nunion AccountType = PasswordAccount | SMSAccount\n\ntype Amazon {\n  referrer: String\n}\n\nunion Body = Image | Text\n\ntype Book implements Product\n@join__owner(graph: BOOKS)\n@join__type(graph: BOOKS, key: \"isbn\")\n@join__type(graph: INVENTORY, key: \"isbn\")\n@join__type(graph: PRODUCT, key: \"isbn\")\n@join__type(graph: REVIEWS, key: \"isbn\")\n{\n  isbn: String! @join__field(graph: BOOKS)\n  title: String @join__field(graph: BOOKS)\n  year: Int @join__field(graph: BOOKS)\n  similarBooks: [Book]! @join__field(graph: BOOKS)\n  metadata: [MetadataOrError] @join__field(graph: BOOKS)\n  inStock: Boolean @join__field(graph: INVENTORY)\n  isCheckedOut: Boolean @join__field(graph: INVENTORY)\n  upc: String! @join__field(graph: PRODUCT)\n  sku: String! @join__field(graph: PRODUCT)\n  name(delimeter: String = \" \"): String @join__field(graph: PRODUCT, requires: \"title year\")\n  price: String @join__field(graph: PRODUCT)\n  details: ProductDetailsBook @join__field(graph: PRODUCT)\n  reviews: [Review] @join__field(graph: REVIEWS)\n  relatedReviews: [Review!]! @join__field(graph: REVIEWS, requires: \"similarBooks{isbn}\")\n}\n\nunion Brand = Ikea | Amazon\n\ntype Car implements Vehicle\n@join__owner(graph: PRODUCT)\n@join__type(graph: PRODUCT, key: \"id\")\n@join__type(graph: REVIEWS, key: \"id\")\n{\n  id: String! @join__field(graph: PRODUCT)\n  description: String @join__field(graph: PRODUCT)\n  price: String @join__field(graph: PRODUCT)\n  retailPrice: String @join__field(graph: REVIEWS, requires: \"price\")\n}\n\ntype Error {\n  code: Int\n  message: String\n}\n\ntype Furniture implements Product\n@join__owner(graph: PRODUCT)\n@join__type(graph: PRODUCT, key: \"upc\")\n@join__type(graph: PRODUCT, key: \"sku\")\n@join__type(graph: INVENTORY, key: \"sku\")\n@join__type(graph: REVIEWS, key: \"upc\")\n{\n  upc: String! @join__field(graph: PRODUCT)\n  sku: String! @join__field(graph: PRODUCT)\n  name: String @join__field(graph: PRODUCT)\n  price: String @join__field(graph: PRODUCT)\n  brand: Brand @join__field(graph: PRODUCT)\n  metadata: [MetadataOrError] @join__field(graph: PRODUCT)\n  details: ProductDetailsFurniture @join__field(graph: PRODUCT)\n  inStock: Boolean @join__field(graph: INVENTORY)\n  isHeavy: Boolean @join__field(graph: INVENTORY)\n  reviews: [Review] @join__field(graph: REVIEWS)\n}\n\ntype Ikea {\n  asile: Int\n}\n\ntype Image implements NamedObject {\n  name: String!\n  attributes: ImageAttributes!\n}\n\ntype ImageAttributes {\n  url: String!\n}\n\nscalar join__FieldSet\n\nenum join__Graph {\nACCOUNTS @join__graph(name: \"accounts\" url: \"\")\nBOOKS @join__graph(name: \"books\" url: \"\")\nDOCUMENTS @join__graph(name: \"documents\" url: \"\")\nINVENTORY @join__graph(name: \"inventory\" url: \"\")\nPRODUCT @join__graph(name: \"product\" url: \"\")\nREVIEWS @join__graph(name: \"reviews\" url: \"\")\n}\n\ntype KeyValue {\n  key: String!\n  value: String!\n}\n\ntype Library\n@join__owner(graph: BOOKS)\n@join__type(graph: BOOKS, key: \"id\")\n@join__type(graph: ACCOUNTS, key: \"id\")\n{\n  id: ID! @join__field(graph: BOOKS)\n  name: String @join__field(graph: BOOKS)\n  userAccount(id: ID! = 1): User @join__field(graph: ACCOUNTS, requires: \"name\")\n}\n\nunion MetadataOrError = KeyValue | Error\n\ntype Mutation {\n  login(username: String!, password: String!): User @join__field(graph: ACCOUNTS)\n  reviewProduct(upc: String!, body: String!): Product @join__field(graph: REVIEWS)\n  updateReview(review: UpdateReviewInput!): Review @join__field(graph: REVIEWS)\n  deleteReview(id: ID!): Boolean @join__field(graph: REVIEWS)\n}\n\ntype Name {\n  first: String\n  last: String\n}\n\ninterface NamedObject {\n  name: String!\n}\n\ntype PasswordAccount\n@join__owner(graph: ACCOUNTS)\n@join__type(graph: ACCOUNTS, key: \"email\")\n{\n  email: String! @join__field(graph: ACCOUNTS)\n}\n\ninterface Product {\n  upc: String!\n  sku: String!\n  name: String\n  price: String\n  details: ProductDetails\n  inStock: Boolean\n  reviews: [Review]\n}\n\ninterface ProductDetails {\n  country: String\n}\n\ntype ProductDetailsBook implements ProductDetails {\n  country: String\n  pages: Int\n}\n\ntype ProductDetailsFurniture implements ProductDetails {\n  country: String\n  color: String\n}\n\ntype Query {\n  user(id: ID!): User @join__field(graph: ACCOUNTS)\n  me: User @join__field(graph: ACCOUNTS)\n  book(isbn: String!): Book @join__field(graph: BOOKS)\n  books: [Book] @join__field(graph: BOOKS)\n  library(id: ID!): Library @join__field(graph: BOOKS)\n  body: Body! @join__field(graph: DOCUMENTS)\n  product(upc: String!): Product @join__field(graph: PRODUCT)\n  vehicle(id: String!): Vehicle @join__field(graph: PRODUCT)\n  topProducts(first: Int = 5): [Product] @join__field(graph: PRODUCT)\n  topCars(first: Int = 5): [Car] @join__field(graph: PRODUCT)\n  topReviews(first: Int = 5): [Review] @join__field(graph: REVIEWS)\n}\n\ntype Review\n@join__owner(graph: REVIEWS)\n@join__type(graph: REVIEWS, key: \"id\")\n{\n  id: ID! @join__field(graph: REVIEWS)\n  body(format: Boolean = false): String @join__field(graph: REVIEWS)\n  author: User @join__field(graph: REVIEWS, provides: \"username\")\n  product: Product @join__field(graph: REVIEWS)\n  metadata: [MetadataOrError] @join__field(graph: REVIEWS)\n}\n\ntype SMSAccount\n@join__owner(graph: ACCOUNTS)\n@join__type(graph: ACCOUNTS, key: \"number\")\n{\n  number: String @join__field(graph: ACCOUNTS)\n}\n\ntype Text implements NamedObject {\n  name: String!\n  attributes: TextAttributes!\n}\n\ntype TextAttributes {\n  bold: Boolean\n  text: String\n}\n\nunion Thing = Car | Ikea\n\ninput UpdateReviewInput {\n  id: ID!\n  body: String\n}\n\ntype User\n@join__owner(graph: ACCOUNTS)\n@join__type(graph: ACCOUNTS, key: \"id\")\n@join__type(graph: ACCOUNTS, key: \"username name{first last}\")\n@join__type(graph: INVENTORY, key: \"id\")\n@join__type(graph: PRODUCT, key: \"id\")\n@join__type(graph: REVIEWS, key: \"id\")\n{\n  id: ID! @join__field(graph: ACCOUNTS)\n  name: Name @join__field(graph: ACCOUNTS)\n  username: String @join__field(graph: ACCOUNTS)\n  birthDate(locale: String): String @join__field(graph: ACCOUNTS)\n  account: AccountType @join__field(graph: ACCOUNTS)\n  metadata: [UserMetadata] @join__field(graph: ACCOUNTS)\n  goodDescription: Boolean @join__field(graph: INVENTORY, requires: \"metadata{description}\")\n  vehicle: Vehicle @join__field(graph: PRODUCT)\n  thing: Thing @join__field(graph: PRODUCT)\n  reviews: [Review] @join__field(graph: REVIEWS)\n  numberOfReviews: Int! @join__field(graph: REVIEWS)\n  goodAddress: Boolean @join__field(graph: REVIEWS, requires: \"metadata{address}\")\n}\n\ntype UserMetadata {\n  name: String\n  address: String\n  description: String\n}\n\ntype Van implements Vehicle\n@join__owner(graph: PRODUCT)\n@join__type(graph: PRODUCT, key: \"id\")\n@join__type(graph: REVIEWS, key: \"id\")\n{\n  id: String! @join__field(graph: PRODUCT)\n  description: String @join__field(graph: PRODUCT)\n  price: String @join__field(graph: PRODUCT)\n  retailPrice: String @join__field(graph: REVIEWS, requires: \"price\")\n}\n\ninterface Vehicle {\n  id: String!\n  description: String\n  price: String\n  retailPrice: String\n}"
  },
  {
    "name": "apollo-rs/parser/ok/0033_directive_on_argument_definition.graphql",
    "error": false,
    "input": "type Mutation {\n  login(userId: String @deprecated(reason: \"Use username instead\")): User\n}"
  },
  {
    "name": "apollo-rs/parser/ok/0034_query_shorthand_followed_by_fragment_definition.graphql",
    "error": false,
    "input": "{\n  ...friendFields\n}\n\nfragment friendFields on User {\n  id\n  name\n}"
  },
  {
    "name": "apollo-rs/parser/ok/0035_query_with_variables.graphql",
    "error": false,
    "input": "query Foo($bar: Int) {\n    name\n}"
  },
  {
    "name": "apollo-rs/parser/ok/0036_parses_variable_definition_with_list_type.graphql",
    "error": false,
    "input": "query ($height: [Int]) {\n    id\n    trees(height: $height)\n}"
  },
  {
    "name": "apollo-rs/parser/ok/0037_operation_type_definition_with_inline_fragment.graphql",
    "error": false,
    "input": "query SomeQuery(\n  $param1: String!\n  $param2: String!\n) {\n  item1(\n    param1: $param1\n    param2: $param2\n  ) {\n    id\n    ... on Fragment1 {\n      field3 {\n        field4\n      }\n    }\n  }\n}"
  },
  {
    "name": "apollo-rs/parser/ok/0038_wrapped_named_types.graphql",
    "error": false,
    "input": "type ObjectDef {\n    a: String\n    b: Int!\n    c: [Int!]!\n    d: [[[[[Int]]]]]\n    d: [[[[[Int!]!]!]!]!]!\n}\n\ntype ObjectDefTwo {\n    a: String,\n    b: Int!,\n    c: [Int!]!,\n    d: [[[[[Int]]]]],\n    d: [[[[[Int!]!]!]!]!]!,\n}"
  },
  {
    "name": "apollo-rs/parser/ok/0039_variable_with_directives.graphql",
    "error": false,
    "input": "query getOutput($input: Int @deprecated $config: String = \"Config\" @tag(name: \"team-customers\")) {\n    animal\n}"
  },
  {
    "name": "apollo-rs/parser/ok/0040_type_token_order.graphql",
    "error": false,
    "input": "type Object {\n  #(apparently you can stick a comma in there?? please dont do it!)\n  field : [Int ,!] # comment\n  _other:\nString,,,   ,\n#garbage\n  realField: ID!\n}\n"
  },
  {
    "name": "apollo-rs/parser/ok/0041_implements_list.graphql",
    "error": false,
    "input": "\"Just one interface\"\ntype One implements A { field: Int! }\n\n\"Several interfaces\"\ntype Two implements A & B & C { field: Int! }\n\n\"&-prefixed\"\ntype Three implements\n  & A\n  & B\n  & C\n{ field: Int! }\n"
  },
  {
    "name": "apollo-rs/parser/ok/0042_object_type_definition_without_fields.graphql",
    "error": false,
    "input": "\"A type with no fields\"\ntype AnObjectTypeWithoutFields\n\nextend type AnObjectTypeWithoutFields {\n  id: ID!\n}"
  },
  {
    "name": "apollo-rs/parser/ok/0043_interface_type_definition_without_fields.graphql",
    "error": false,
    "input": "\"An interface with no fields\"\ninterface AnInterfaceWithoutFields\n\nextend interface AnInterfaceWithoutFields {\n  id: ID!\n}\n"
  }
]
