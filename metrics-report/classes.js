var classes = [
    {
        "name": "App\\Http\\Controllers\\API\\ApiController",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "showRegistrationForm",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "showLoginForm",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "register",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "login",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "profile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "logout",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "validateRegister",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "validateLogin",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "createUser",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 9,
        "nbMethods": 9,
        "nbMethodsPrivate": 3,
        "nbMethodsPublic": 6,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 16,
        "ccn": 8,
        "ccnMethodMax": 3,
        "externals": [
            "App\\Http\\Controllers\\Controller",
            "Illuminate\\Contracts\\View\\View",
            "Illuminate\\Contracts\\View\\View",
            "Illuminate\\Http\\RedirectResponse",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Support\\Facades\\Validator",
            "Illuminate\\Support\\Facades\\Auth",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\RedirectResponse",
            "Illuminate\\Http\\Request",
            "Illuminate\\Support\\Facades\\Auth",
            "Illuminate\\Http\\Request",
            "Illuminate\\Support\\Facades\\Validator",
            "Exception",
            "Illuminate\\Http\\Request",
            "Illuminate\\Support\\Facades\\Validator",
            "Exception",
            "App\\Models\\User",
            "Illuminate\\Http\\Request",
            "Illuminate\\Support\\Facades\\Hash",
            "App\\Models\\User"
        ],
        "parents": [
            "App\\Http\\Controllers\\Controller"
        ],
        "implements": [],
        "lcom": 7,
        "length": 104,
        "vocabulary": 30,
        "volume": 510.32,
        "difficulty": 8.1,
        "effort": 4133.56,
        "level": 0.12,
        "bugs": 0.17,
        "time": 230,
        "intelligentContent": 63,
        "number_operators": 23,
        "number_operands": 81,
        "number_operators_unique": 5,
        "number_operands_unique": 25,
        "cloc": 0,
        "loc": 65,
        "lloc": 65,
        "mi": 40.42,
        "mIwoC": 40.42,
        "commentWeight": 0,
        "kanDefect": 0.5,
        "relativeStructuralComplexity": 441,
        "relativeDataComplexity": 0.49,
        "relativeSystemComplexity": 441.49,
        "totalStructuralComplexity": 3969,
        "totalDataComplexity": 4.41,
        "totalSystemComplexity": 3973.41,
        "package": "App\\Http\\Controllers\\API\\",
        "pageRank": 0.04,
        "afferentCoupling": 0,
        "efferentCoupling": 9,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Http\\Controllers\\Controller",
        "interface": false,
        "abstract": true,
        "final": false,
        "methods": [],
        "nbMethodsIncludingGettersSetters": 0,
        "nbMethods": 0,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 0,
        "ccn": 1,
        "ccnMethodMax": 0,
        "externals": [],
        "parents": [],
        "implements": [],
        "lcom": 0,
        "length": 0,
        "vocabulary": 0,
        "volume": 0,
        "difficulty": 0,
        "effort": 0,
        "level": 0,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 0,
        "number_operators": 0,
        "number_operands": 0,
        "number_operators_unique": 0,
        "number_operands_unique": 0,
        "cloc": 1,
        "loc": 5,
        "lloc": 4,
        "mi": 202.94,
        "mIwoC": 171,
        "commentWeight": 31.94,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "package": "App\\Http\\Controllers\\",
        "pageRank": 0.15,
        "afferentCoupling": 4,
        "efferentCoupling": 0,
        "instability": 0,
        "violations": {}
    },
    {
        "name": "App\\Http\\Controllers\\CookiesController",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "setCookie",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getCookie",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "forgetCookie",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "checkCookie",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 4,
        "nbMethods": 4,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 4,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 5,
        "ccn": 2,
        "ccnMethodMax": 2,
        "externals": [
            "App\\Http\\Controllers\\Controller",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Response",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Request",
            "Illuminate\\Http\\Response",
            "Illuminate\\Support\\Facades\\Cookie",
            "Illuminate\\Http\\Request"
        ],
        "parents": [
            "App\\Http\\Controllers\\Controller"
        ],
        "implements": [],
        "lcom": 4,
        "length": 35,
        "vocabulary": 13,
        "volume": 129.52,
        "difficulty": 3.9,
        "effort": 505.11,
        "level": 0.26,
        "bugs": 0.04,
        "time": 28,
        "intelligentContent": 33.21,
        "number_operators": 9,
        "number_operands": 26,
        "number_operators_unique": 3,
        "number_operands_unique": 10,
        "cloc": 6,
        "loc": 32,
        "lloc": 26,
        "mi": 85.16,
        "mIwoC": 54.07,
        "commentWeight": 31.08,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 9,
        "relativeDataComplexity": 1.25,
        "relativeSystemComplexity": 10.25,
        "totalStructuralComplexity": 36,
        "totalDataComplexity": 5,
        "totalSystemComplexity": 41,
        "package": "App\\Http\\Controllers\\",
        "pageRank": 0.04,
        "afferentCoupling": 0,
        "efferentCoupling": 4,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Http\\Controllers\\GuestController",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "continueAsGuest",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 1,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "App\\Http\\Controllers\\Controller",
            "Illuminate\\Http\\Request"
        ],
        "parents": [
            "App\\Http\\Controllers\\Controller"
        ],
        "implements": [],
        "lcom": 1,
        "length": 5,
        "vocabulary": 4,
        "volume": 10,
        "difficulty": 0.67,
        "effort": 6.67,
        "level": 1.5,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 15,
        "number_operators": 1,
        "number_operands": 4,
        "number_operators_unique": 1,
        "number_operands_unique": 3,
        "cloc": 3,
        "loc": 12,
        "lloc": 9,
        "mi": 107.02,
        "mIwoC": 72.05,
        "commentWeight": 34.97,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 9,
        "relativeDataComplexity": 0.5,
        "relativeSystemComplexity": 9.5,
        "totalStructuralComplexity": 9,
        "totalDataComplexity": 0.5,
        "totalSystemComplexity": 9.5,
        "package": "App\\Http\\Controllers\\",
        "pageRank": 0.04,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Http\\Controllers\\ProductController",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "index",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "create",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "store",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "show",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "edit",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "update",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "destroy",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "validateConference",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 8,
        "nbMethods": 8,
        "nbMethodsPrivate": 1,
        "nbMethodsPublic": 7,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 9,
        "ccn": 2,
        "ccnMethodMax": 2,
        "externals": [
            "App\\Http\\Controllers\\Controller",
            "Illuminate\\Contracts\\View\\View",
            "Illuminate\\Http\\Request",
            "App\\Models\\Conference",
            "Illuminate\\Http\\Request",
            "App\\Models\\Conference",
            "App\\Models\\Conference",
            "Illuminate\\Contracts\\View\\View",
            "App\\Models\\Conference",
            "Illuminate\\Http\\RedirectResponse",
            "Illuminate\\Http\\Request",
            "App\\Models\\Conference",
            "App\\Models\\Conference",
            "Illuminate\\Http\\Request"
        ],
        "parents": [
            "App\\Http\\Controllers\\Controller"
        ],
        "implements": [],
        "lcom": 6,
        "length": 72,
        "vocabulary": 33,
        "volume": 363.2,
        "difficulty": 5.27,
        "effort": 1913.27,
        "level": 0.19,
        "bugs": 0.12,
        "time": 106,
        "intelligentContent": 68.95,
        "number_operators": 13,
        "number_operands": 59,
        "number_operators_unique": 5,
        "number_operands_unique": 28,
        "cloc": 24,
        "loc": 70,
        "lloc": 46,
        "mi": 84.92,
        "mIwoC": 45.53,
        "commentWeight": 39.39,
        "kanDefect": 0.22,
        "relativeStructuralComplexity": 100,
        "relativeDataComplexity": 0.74,
        "relativeSystemComplexity": 100.74,
        "totalStructuralComplexity": 800,
        "totalDataComplexity": 5.91,
        "totalSystemComplexity": 805.91,
        "package": "App\\Http\\Controllers\\",
        "pageRank": 0.04,
        "afferentCoupling": 0,
        "efferentCoupling": 5,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "App\\Models\\Conference",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [],
        "nbMethodsIncludingGettersSetters": 0,
        "nbMethods": 0,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 0,
        "ccn": 1,
        "ccnMethodMax": 0,
        "externals": [
            "Illuminate\\Database\\Eloquent\\Model"
        ],
        "parents": [
            "Illuminate\\Database\\Eloquent\\Model"
        ],
        "implements": [],
        "lcom": 0,
        "length": 8,
        "vocabulary": 8,
        "volume": 24,
        "difficulty": 0,
        "effort": 0,
        "level": 2,
        "bugs": 0.01,
        "time": 0,
        "intelligentContent": 48,
        "number_operators": 0,
        "number_operands": 8,
        "number_operators_unique": 0,
        "number_operands_unique": 8,
        "cloc": 0,
        "loc": 7,
        "lloc": 7,
        "mi": 71.77,
        "mIwoC": 71.77,
        "commentWeight": 0,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "package": "App\\Models\\",
        "pageRank": 0.18,
        "afferentCoupling": 2,
        "efferentCoupling": 1,
        "instability": 0.33,
        "violations": {}
    },
    {
        "name": "App\\Models\\User",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "casts",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 1,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 1,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Illuminate\\Foundation\\Auth\\User"
        ],
        "parents": [
            "Illuminate\\Foundation\\Auth\\User"
        ],
        "implements": [],
        "lcom": 1,
        "length": 10,
        "vocabulary": 8,
        "volume": 30,
        "difficulty": 0.64,
        "effort": 19.29,
        "level": 1.56,
        "bugs": 0.01,
        "time": 1,
        "intelligentContent": 46.67,
        "number_operators": 1,
        "number_operands": 9,
        "number_operators_unique": 1,
        "number_operands_unique": 7,
        "cloc": 15,
        "loc": 26,
        "lloc": 11,
        "mi": 112.97,
        "mIwoC": 66.81,
        "commentWeight": 46.17,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 1,
        "relativeSystemComplexity": 1,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 1,
        "totalSystemComplexity": 1,
        "package": "App\\Models\\",
        "pageRank": 0.13,
        "afferentCoupling": 2,
        "efferentCoupling": 1,
        "instability": 0.33,
        "violations": {}
    },
    {
        "name": "App\\Providers\\AppServiceProvider",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "register",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "boot",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 2,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Illuminate\\Support\\ServiceProvider",
            "Illuminate\\Pagination\\Paginator"
        ],
        "parents": [
            "Illuminate\\Support\\ServiceProvider"
        ],
        "implements": [],
        "lcom": 2,
        "length": 0,
        "vocabulary": 0,
        "volume": 0,
        "difficulty": 0,
        "effort": 0,
        "level": 0,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 0,
        "number_operators": 0,
        "number_operands": 0,
        "number_operators_unique": 0,
        "number_operands_unique": 0,
        "cloc": 7,
        "loc": 18,
        "lloc": 11,
        "mi": 212.13,
        "mIwoC": 171,
        "commentWeight": 41.13,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 1,
        "totalStructuralComplexity": 2,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 2,
        "package": "App\\Providers\\",
        "pageRank": 0.04,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Database\\Factories\\ConferenceFactory",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "definition",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 1,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Illuminate\\Database\\Eloquent\\Factories\\Factory"
        ],
        "parents": [
            "Illuminate\\Database\\Eloquent\\Factories\\Factory"
        ],
        "implements": [],
        "lcom": 1,
        "length": 19,
        "vocabulary": 13,
        "volume": 70.31,
        "difficulty": 0.75,
        "effort": 52.73,
        "level": 1.33,
        "bugs": 0.02,
        "time": 3,
        "intelligentContent": 93.74,
        "number_operators": 1,
        "number_operands": 18,
        "number_operators_unique": 1,
        "number_operands_unique": 12,
        "cloc": 0,
        "loc": 9,
        "lloc": 9,
        "mi": 66.12,
        "mIwoC": 66.12,
        "commentWeight": 0,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 4,
        "relativeDataComplexity": 0.33,
        "relativeSystemComplexity": 4.33,
        "totalStructuralComplexity": 4,
        "totalDataComplexity": 0.33,
        "totalSystemComplexity": 4.33,
        "package": "Database\\Factories\\",
        "pageRank": 0.04,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Database\\Factories\\UserFactory",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "definition",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "unverified",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 2,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Illuminate\\Database\\Eloquent\\Factories\\Factory",
            "Illuminate\\Support\\Facades\\Hash",
            "Illuminate\\Support\\Str"
        ],
        "parents": [
            "Illuminate\\Database\\Eloquent\\Factories\\Factory"
        ],
        "implements": [],
        "lcom": 2,
        "length": 13,
        "vocabulary": 10,
        "volume": 43.19,
        "difficulty": 1.25,
        "effort": 53.98,
        "level": 0.8,
        "bugs": 0.01,
        "time": 3,
        "intelligentContent": 34.55,
        "number_operators": 3,
        "number_operands": 10,
        "number_operators_unique": 2,
        "number_operands_unique": 8,
        "cloc": 14,
        "loc": 27,
        "lloc": 13,
        "mi": 109.02,
        "mIwoC": 64.12,
        "commentWeight": 44.91,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 36,
        "relativeDataComplexity": 0.29,
        "relativeSystemComplexity": 36.29,
        "totalStructuralComplexity": 72,
        "totalDataComplexity": 0.57,
        "totalSystemComplexity": 72.57,
        "package": "Database\\Factories\\",
        "pageRank": 0.04,
        "afferentCoupling": 0,
        "efferentCoupling": 3,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "anonymous@00000000000006580000000000000000",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "up",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "down",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 2,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Illuminate\\Database\\Migrations\\Migration",
            "Illuminate\\Support\\Facades\\Schema",
            "Illuminate\\Support\\Facades\\Schema",
            "Illuminate\\Support\\Facades\\Schema",
            "Illuminate\\Support\\Facades\\Schema",
            "Illuminate\\Support\\Facades\\Schema",
            "Illuminate\\Support\\Facades\\Schema"
        ],
        "parents": [
            "Illuminate\\Database\\Migrations\\Migration"
        ],
        "implements": [],
        "lcom": 2,
        "length": 39,
        "vocabulary": 17,
        "volume": 159.41,
        "difficulty": 0,
        "effort": 0,
        "level": 0.87,
        "bugs": 0.05,
        "time": 0,
        "intelligentContent": 138.97,
        "number_operators": 0,
        "number_operands": 39,
        "number_operators_unique": 0,
        "number_operands_unique": 17,
        "cloc": 6,
        "loc": 41,
        "lloc": 35,
        "mi": 78.69,
        "mIwoC": 50.76,
        "commentWeight": 27.93,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 196,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 196,
        "totalStructuralComplexity": 392,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 392,
        "package": "Database\\Factories\\",
        "pageRank": 0.04,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "anonymous@00000000000007560000000000000000",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "up",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "down",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 2,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Illuminate\\Database\\Migrations\\Migration",
            "Illuminate\\Support\\Facades\\Schema",
            "Illuminate\\Support\\Facades\\Schema",
            "Illuminate\\Support\\Facades\\Schema",
            "Illuminate\\Support\\Facades\\Schema",
            "Illuminate\\Support\\Facades\\Schema",
            "Illuminate\\Support\\Facades\\Schema"
        ],
        "parents": [
            "Illuminate\\Database\\Migrations\\Migration"
        ],
        "implements": [],
        "lcom": 2,
        "length": 55,
        "vocabulary": 22,
        "volume": 245.27,
        "difficulty": 0,
        "effort": 0,
        "level": 0.8,
        "bugs": 0.08,
        "time": 0,
        "intelligentContent": 196.21,
        "number_operators": 0,
        "number_operands": 55,
        "number_operators_unique": 0,
        "number_operands_unique": 22,
        "cloc": 6,
        "loc": 49,
        "lloc": 43,
        "mi": 73.3,
        "mIwoC": 47.5,
        "commentWeight": 25.8,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 225,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 225,
        "totalStructuralComplexity": 450,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 450,
        "package": "Database\\Factories\\",
        "pageRank": 0.04,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "anonymous@000000000000061e0000000000000000",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "up",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "down",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 2,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Illuminate\\Database\\Migrations\\Migration",
            "Illuminate\\Support\\Facades\\Schema",
            "Illuminate\\Support\\Facades\\Schema"
        ],
        "parents": [
            "Illuminate\\Database\\Migrations\\Migration"
        ],
        "implements": [],
        "lcom": 2,
        "length": 20,
        "vocabulary": 10,
        "volume": 66.44,
        "difficulty": 0,
        "effort": 0,
        "level": 1,
        "bugs": 0.02,
        "time": 0,
        "intelligentContent": 66.44,
        "number_operators": 0,
        "number_operands": 20,
        "number_operators_unique": 0,
        "number_operands_unique": 10,
        "cloc": 6,
        "loc": 28,
        "lloc": 22,
        "mi": 90.68,
        "mIwoC": 57.82,
        "commentWeight": 32.86,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 81,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 81,
        "totalStructuralComplexity": 162,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 162,
        "package": "Database\\Factories\\",
        "pageRank": 0.04,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "anonymous@000000000000057c0000000000000000",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "up",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "down",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 2,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Illuminate\\Database\\Migrations\\Migration",
            "Illuminate\\Support\\Facades\\Schema",
            "Illuminate\\Support\\Facades\\Schema"
        ],
        "parents": [
            "Illuminate\\Database\\Migrations\\Migration"
        ],
        "implements": [],
        "lcom": 2,
        "length": 18,
        "vocabulary": 9,
        "volume": 57.06,
        "difficulty": 0,
        "effort": 0,
        "level": 1,
        "bugs": 0.02,
        "time": 0,
        "intelligentContent": 57.06,
        "number_operators": 0,
        "number_operands": 18,
        "number_operators_unique": 0,
        "number_operands_unique": 9,
        "cloc": 6,
        "loc": 27,
        "lloc": 21,
        "mi": 92.08,
        "mIwoC": 58.72,
        "commentWeight": 33.35,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 81,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 81,
        "totalStructuralComplexity": 162,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 162,
        "package": "Database\\Factories\\",
        "pageRank": 0.04,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Database\\Seeders\\ConferenceSeeder",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "run",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 1,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Illuminate\\Database\\Seeder",
            "App\\Models\\Conference"
        ],
        "parents": [
            "Illuminate\\Database\\Seeder"
        ],
        "implements": [],
        "lcom": 1,
        "length": 12,
        "vocabulary": 11,
        "volume": 41.51,
        "difficulty": 0.55,
        "effort": 22.83,
        "level": 1.82,
        "bugs": 0.01,
        "time": 1,
        "intelligentContent": 75.48,
        "number_operators": 1,
        "number_operands": 11,
        "number_operators_unique": 1,
        "number_operands_unique": 10,
        "cloc": 3,
        "loc": 11,
        "lloc": 8,
        "mi": 105.02,
        "mIwoC": 68.84,
        "commentWeight": 36.18,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "package": "Database\\Seeders\\",
        "pageRank": 0.04,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Database\\Seeders\\DatabaseSeeder",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "run",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 1,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Illuminate\\Database\\Seeder",
            "App\\Models\\User"
        ],
        "parents": [
            "Illuminate\\Database\\Seeder"
        ],
        "implements": [],
        "lcom": 1,
        "length": 4,
        "vocabulary": 4,
        "volume": 8,
        "difficulty": 0,
        "effort": 0,
        "level": 2,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 16,
        "number_operators": 0,
        "number_operands": 4,
        "number_operators_unique": 0,
        "number_operands_unique": 4,
        "cloc": 4,
        "loc": 12,
        "lloc": 8,
        "mi": 112.83,
        "mIwoC": 73.84,
        "commentWeight": 38.99,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 4,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 4,
        "totalStructuralComplexity": 4,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 4,
        "package": "Database\\Seeders\\",
        "pageRank": 0.04,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    }
]