
# Dynamic Form Maker

## Project Description:

    The goal of this project is to create a React application using Chakra UI that allows users to paste a UI schema on the left side and preview the rendered form on the right-hand side. The UI schema is a JSON array that contains all the information required to generate dynamic forms. The application will have a single screen divided into two equal sections. The left section will contain a JSON editor where users can paste the UI schema, and the right section will automatically render a form based on the pasted UI schema.

    The UI schema will contain objects with various fields that define the form's structure and functionalities. Each object in the UI schema will have properties such as "sort" for determining the sequence of form sections, "label" for displaying the section label, "description" for holding the description of the section or field, "validate" for defining field validations like "required" and "immutable", "jsonKey" for holding a unique key for each field/section, "uiType" for specifying the type of form element (e.g., input, number, group, select, switch), "level" for determining the nesting of fields, and "placeholder" for adding placeholder/hint text in the form fields.

    The UI schema can contain different types of form elements, such as text input fields, group fields, and radio fields. Text input fields can be used to capture user input for fields such as pizza name, and group fields can contain multiple fields nested within them, such as pizza type and toppings. Radio fields can be used to present options to the user, such as different types of pizza.

    The application will also have advanced fields that can be toggled on and off. These fields will be hidden by default and will only be displayed when the user clicks on the "Show advanced fields" toggle button. The visibility of these advanced fields will be controlled by the "validate" property in the UI schema.




## Project Description
    The React application will have two main components: the JSON editor component and the form preview component. The JSON editor component will allow users to paste the UI-Schema in JSON format on the left-hand side. The form preview component will automatically render the form based on the pasted UI-Schema and display it on the right-hand side.

## Features - (JSON Editor)

    - Ability to detect changes in the pasted JSON and update the form preview component in real-time.
    - Validation of the UI-Schema to ensure that it follows the required structure and properties.
## Features - (Form Preview)

    - Automatically render the form based on the pasted UI-Schema.
    - Dynamically update the form based on changes in the UI-Schema in the JSON editor component.
    - Handle different field types such as text input, radio, switch, group, etc., and render them accordingly with their respective properties.
    - Handle nested fields inside groups and show/hide them based on the user's interaction with the form.
    - Show tooltips for fields with descriptions when hovered.
    - Handle form submissions and show the form data to the user which is going to send to the backend using the jsonKey values as keys and the entered values as values.

## data

[
    {
      "sort": 1,
      "label": "Pizza Name",
      "description": "",
      "validate": {
        "required": true,
        "immutable": false
      },
      "jsonKey": "name",
      "uiType": "Input",
      "icon": "",
      "level": 0,
      "placeholder": ""
    },
    {
      "sort": 4,
      "label": "Pizza_type",
      "description": "",
      "validate": {
        "required": true,
        "immutable": false
      },
      "jsonKey": "pizza_type",
      "uiType": "Group",
      "icon": "",
      "level": 0,
      "placeholder": "",
      "subParameters": [
        {
          "sort": 0,
          "label": "Pizza_type Type",
          "description": "",
          "validate": {
            "required": true,
            "options": [
              {
                "label": "Naples Style Pizza",
                "value": "naples",
                "description": "",
                "icon": ""
              },
              {
                "label": "New York Style Pizza",
                "value": "newyork",
                "description": "",
                "icon": ""
              }
            ],
            "defaultValue": "naples",
            "immutable": false
          },
          "jsonKey": "type",
          "uiType": "Radio",
          "icon": "",
          "level": 1,
          "placeholder": ""
        },
        {
          "sort": 10001,
          "label": "Naples Style Pizza",
          "description": "",
          "validate": {
            "required": true,
            "immutable": false
          },
          "jsonKey": "Naples",
          "uiType": "Ignore",
          "icon": "",
          "level": 1,
          "placeholder": "",
          "conditions": [
            {
              "jsonKey": "pizza_type.type",
              "op": "==",
              "value": "naples",
              "action": "enable"
            }
          ],
          "subParameters": [
            {
              "sort": 10000,
              "label": "Slices",
              "description": "",
              "validate": {
                "required": true,
                "options": [
                  {
                    "label": "1",
                    "value": "1",
                    "description": "",
                    "icon": ""
                  },
                  {
                    "label": "2",
                    "value": "2",
                    "description": "",
                    "icon": ""
                  },
                  {
                    "label": "3",
                    "value": "3",
                    "description": "",
                    "icon": ""
                  },
                  {
                    "label": "4",
                    "value": "4",
                    "description": "",
                    "icon": ""
                  },
                  {
                    "label": "5",
                    "value": "5",
                    "description": "",
                    "icon": ""
                  }
                ],
                "defaultValue": "1",
                "immutable": false
              },
              "jsonKey": "slices",
              "uiType": "Select",
              "icon": "",
              "level": 2,
              "placeholder": ""
            },
            {
              "sort": 10001,
              "label": "Type",
              "description": "",
              "validate": {
                "required": true,
                "pattern": "naples",
                "immutable": false
              },
              "jsonKey": "type",
              "uiType": "Input",
              "icon": "",
              "level": 2,
              "placeholder": "",
              "disable": true
            }
          ]
        },
        {
          "sort": 10002,
          "label": "New York Style Pizza",
          "description": "",
          "validate": {
            "required": true,
            "immutable": false
          },
          "jsonKey": "NewYork",
          "uiType": "Ignore",
          "icon": "",
          "level": 1,
          "placeholder": "",
          "conditions": [
            {
              "jsonKey": "pizza_type.type",
              "op": "==",
              "value": "newyork",
              "action": "enable"
            }
          ],
          "subParameters": [
            {
              "sort": 10000,
              "label": "Cheeseburst",
              "description": "",
              "validate": {
                "required": true,
                "defaultValue": false,
                "immutable": false
              },
              "jsonKey": "cheeseburst",
              "uiType": "Switch",
              "icon": "",
              "level": 2,
              "placeholder": ""
            },
            {
              "sort": 10001,
              "label": "Type",
              "description": "",
              "validate": {
                "required": true,
                "pattern": "newyork",
                "immutable": false
              },
              "jsonKey": "type",
              "uiType": "Input",
              "icon": "",
              "level": 2,
              "placeholder": "",
              "disable": true
            }
          ]
        }
      ]
    },
    {
      "sort": 10002,
      "label": "Toppings",
      "description": "",
      "validate": {
        "required": true,
        "immutable": false
      },
      "jsonKey": "toppings",
      "uiType": "Group",
      "icon": "",
      "level": 0,
      "placeholder": "",
      "subParameters": [
        {
          "sort": 1,
          "label": "Sauce",
          "description": "",
          "validate": {
            "required": true,
            "options": [
              {
                "label": "Red",
                "value": "Red",
                "description": "",
                "icon": ""
              },
              {
                "label": "White",
                "value": "White",
                "description": "",
                "icon": ""
              },
              {
                "label": "Pesto",
                "value": "Pesto",
                "description": "",
                "icon": ""
              }
            ],
            "defaultValue": "Red",
            "immutable": false
          },
          "jsonKey": "sauce",
          "uiType": "Select",
          "icon": "",
          "level": 1,
          "placeholder": ""
        },
        {
          "sort": 3,
          "label": "Main_topping",
          "description": "",
          "validate": {
            "required": true,
            "options": [
              {
                "label": "Mushroom",
                "value": "Mushroom",
                "description": "",
                "icon": ""
              },
              {
                "label": "Chicken",
                "value": "Chicken",
                "description": "",
                "icon": ""
              },
              {
                "label": "Jalapenos",
                "value": "Jalapenos",
                "description": "",
                "icon": ""
              }
            ],
            "defaultValue": "Mushroom",
            "immutable": false
          },
          "jsonKey": "main_topping",
          "uiType": "Select",
          "icon": "",
          "level": 1,
          "placeholder": ""
        },
        {
          "sort": 6,
          "label": "Include_seasonings",
          "description": "",
          "validate": {
            "required": true,
            "defaultValue": true,
            "immutable": false
          },
          "jsonKey": "include_seasonings",
          "uiType": "Switch",
          "icon": "",
          "level": 1,
          "placeholder": ""
        },
        {
          "sort": 6,
          "label": "Second_topping",
          "description": "",
          "validate": {
            "options": [
              {
                "label": "Anchovies",
                "value": "Anchovies",
                "description": "",
                "icon": ""
              },
              {
                "label": "Pineapple",
                "value": "Pineapple",
                "description": "",
                "icon": ""
              },
              {
                "label": "Potatoes",
                "value": "Potatoes",
                "description": "",
                "icon": ""
              }
            ],
            "defaultValue": "Anchovies",
            "immutable": false
          },
          "jsonKey": "second_topping",
          "uiType": "Select",
          "icon": "",
          "level": 1,
          "placeholder": ""
        }
      ]
    },
    {
      "sort": 10003,
      "label": "Size",
      "description": "",
      "validate": {
        "options": [
          {
            "label": "Medium",
            "value": "Medium",
            "description": "",
            "icon": ""
          },
          {
            "label": "Small",
            "value": "Small",
            "description": "",
            "icon": ""
          },
          {
            "label": "Large",
            "value": "Large",
            "description": "",
            "icon": ""
          }
        ],
        "defaultValue": "Medium",
        "immutable": false
      },
      "jsonKey": "size",
      "uiType": "Select",
      "icon": "",
      "level": 0,
      "placeholder": ""
    }
]

