const uuid = require('uuid');

module.exports = function () {
    return {
        navigation: [

            {
                "anchor": "a",
                "content": "New!",
                "link": '/new'
            }
            ,

            {
                "anchor": "a",
                "content": "Bras",
                "link": '/bras',
                "section":
                {
                    "tagName": "section",
                    "class": "nav",
                    "children": [
                        {
                            "tagName": "div",
                            "class": "nav-column",
                            "children": [
                                {
                                    "tagName": "span",
                                    "class": "title",
                                    "content": "Sexy Solutions"
                                },
                                {
                                    "tagName": "ul",
                                    "children": [
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "Unlined"
                                                }
                                            ]
                                        },
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "Lightly Lined"
                                                }
                                            ]
                                        },
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "Push-Up"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "tagName": "span",
                                    "class": "title",
                                    "children": [
                                        {
                                            "tagName": "a",
                                            "content": "All Bras",
                                            "link": '/bras',
                                            "children": [
                                                {
                                                    "tagName": "i",
                                                    "class": [
                                                        "fa",
                                                        "fa-chevron-right"
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "tagName": "div",
                            "class": "nav-column",
                            "children": [
                                {
                                    "tagName": "span",
                                    "class": "title",
                                    "content": "STYLES"
                                },
                                {
                                    "tagName": "ul",
                                    "children": [
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "Demi",
                                                    "link": '/bras/demi'
                                                }
                                            ]
                                        },
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "Perfect Coverage",
                                                    "link": "/bras/perfect-coverage"
                                                }
                                            ]
                                        },
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "Balconet",
                                                    "link": "/bras/balconet"
                                                }
                                            ]
                                        },
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "Strapless",
                                                    "link": "/bras/strapless"
                                                }
                                            ]
                                        },
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "Multi-way"
                                                }
                                            ]
                                        },
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "T-Shirt"
                                                }
                                            ]
                                        },
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "Bralettes"
                                                }
                                            ]
                                        },
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "Wireless"
                                                }
                                            ]
                                        },
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "Sport Bras"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "tagName": "div",
                            "class": "nav-column",
                            "children": [
                                {
                                    "tagName": "span",
                                    "class": "title",
                                    "content": "Collection"
                                },
                                {
                                    "tagName": "ul",
                                    "children": [
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "Body By Victoria"
                                                }
                                            ]
                                        },
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "Sexy Illusions"
                                                }
                                            ]
                                        },
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "Very Sexy"
                                                }
                                            ]
                                        },
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "Dream Angels"
                                                }
                                            ]
                                        },
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "2/1 439,64 ₴ T-Shirt Bras"
                                                }
                                            ]
                                        },
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "2/822,65 ₴ Bralettes"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "tagName": "span",
                                    "class": "title",
                                    "content": "Occasion"
                                },
                                {
                                    "tagName": "ul",
                                    "children": [
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "Everyday Angel"
                                                }
                                            ]
                                        },
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "Angel Date"
                                                }
                                            ]
                                        },
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "Angel After Dark"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "tagName": "div",
                            "class": "nav-column",
                            "children": [
                                {
                                    "tagName": "span",
                                    "class": "title",
                                    "content": "WHAT'S HOT NOW"
                                },
                                {
                                    "tagName": "ul",
                                    "children": [
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "Trending: Velvet"
                                                }
                                            ]
                                        },
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "The Shine Shop"
                                                }
                                            ]
                                        },
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "Knock 'Em Red"
                                                }
                                            ]
                                        },
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "Just In: Current Obsessions"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "tagName": "div",
                            "class": "nav-column",
                            "children": [
                                {
                                    "tagName": "span",
                                    "class": "title",
                                    "children": [
                                        {
                                            "tagName": "a",
                                            "content": "Bra Guide",
                                            "children": [
                                                {
                                                    "tagName": "i",
                                                    "class": [
                                                        "fa",
                                                        "fa-chevron-right"
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "tagName": "span",
                                    "class": "title",
                                    "children": [
                                        {
                                            "tagName": "a",
                                            "content": "Gift Cards",
                                            "children": [
                                                {
                                                    "tagName": "i",
                                                    "class": [
                                                        "fa",
                                                        "fa-chevron-right"
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            }
            ,

            {
                "anchor": "a",
                "content": "Panties",
                "link": '/panties',
                "section":
                {
                    "tagName": "section",
                    "class": "nav",
                    "children": [
                        {
                            "tagName": "div",
                            "class": "nav-column",
                            "children": [
                                {
                                    "tagName": "span",
                                    "class": "title",
                                    "children": [
                                        {
                                            "tagName": "a",
                                            "content": "All Panties",
                                            "children": [
                                                {
                                                    "tagName": "i",
                                                    "class": [
                                                        "fa",
                                                        "fa-chevron-right"
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "tagName": "div",
                            "class": "nav-column",
                            "children": [
                                {
                                    "tagName": "span",
                                    "class": "title",
                                    "content": "STYLES"
                                },
                                {
                                    "tagName": "ul",
                                    "children": [
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "Thongs & V-Strings"
                                                }
                                            ]
                                        },
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "Cheekies & Cheekinis"
                                                }
                                            ]
                                        },
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "Bikinis & Briefs"
                                                }
                                            ]
                                        },
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "Hiphuggers"
                                                }
                                            ]
                                        },
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "Shorties & Boyshorts"
                                                }
                                            ]
                                        },
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "Seamless & No-Show"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "tagName": "div",
                            "class": "nav-column",
                            "children": [
                                {
                                    "tagName": "span",
                                    "class": "title",
                                    "content": "WHAT'S HOT NOW"
                                },
                                {
                                    "tagName": "ul",
                                    "children": [
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "New Arrivals"
                                                }
                                            ]
                                        },
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "The Panty Guide"
                                                }
                                            ]
                                        },
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "Trending: Velvet"
                                                }
                                            ]
                                        },
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "Buy 3 Get 3 Free Panties Offer"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "tagName": "div",
                            "class": "nav-column",
                            "children": [
                                {
                                    "tagName": "span",
                                    "class": "title",
                                    "content": "Panties Loves Bras"
                                },
                                {
                                    "tagName": "ul",
                                    "children": [
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "Unlined"
                                                }
                                            ]
                                        },
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "Lightly Lined"
                                                }
                                            ]
                                        },
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "Push-Up"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "tagName": "span",
                                    "class": "title",
                                    "children": [
                                        {
                                            "tagName": "a",
                                            "content": "Gift Cards",
                                            "children": [
                                                {
                                                    "tagName": "i",
                                                    "class": [
                                                        "fa",
                                                        "fa-chevron-right"
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            }
            ,

            {
                "anchor": "a",
                "content": "Lingerie",
                "link": '/lingerie',
                "section":
                {
                    "tagName": "section",
                    "class": "nav",
                    "children": [
                        {
                            "tagName": "div",
                            "class": "nav-column",
                            "children": [
                                {
                                    "tagName": "span",
                                    "class": "title",
                                    "children": [
                                        {
                                            "tagName": "a",
                                            "content": "All Lingerie",
                                            "children": [
                                                {
                                                    "tagName": "i",
                                                    "class": [
                                                        "fa",
                                                        "fa-chevron-right"
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "tagName": "div",
                            "class": "nav-column",
                            "children": [
                                {
                                    "tagName": "span",
                                    "class": "title",
                                    "content": "Styles"
                                },
                                {
                                    "tagName": "ul",
                                    "children": [
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "Slips"
                                                }
                                            ]
                                        },
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "Babydolls"
                                                }
                                            ]
                                        },
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "Teddies & Bodysuits"
                                                }
                                            ]
                                        },
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "Kimonos"
                                                }
                                            ]
                                        },
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "Corsets & Bustiers"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "tagName": "div",
                            "class": "nav-column",
                            "children": [
                                {
                                    "tagName": "span",
                                    "class": "title",
                                    "content": "What's Hot Now"
                                },
                                {
                                    "tagName": "ul",
                                    "children": [
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "Just In: Current Obsessions"
                                                }
                                            ]
                                        },
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "New Arrivals"
                                                }
                                            ]
                                        },
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "The Black Edit"
                                                }
                                            ]
                                        },
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "Bridal"
                                                }
                                            ]
                                        },
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "Online Exclusives"
                                                }
                                            ]
                                        },
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "Trending: Velvet"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "tagName": "div",
                            "class": "nav-column",
                            "children": [
                                {
                                    "tagName": "span",
                                    "class": "title",
                                    "children": [
                                        {
                                            "tagName": "a",
                                            "content": "Gift Cards",
                                            "children": [
                                                {
                                                    "tagName": "i",
                                                    "class": [
                                                        "fa",
                                                        "fa-chevron-right"
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            }
            ,

            {
                "anchor": "a",
                "content": "Sport Bras",
                "link": '/sport-bras',
                "section":
                {
                    "tagName": "section",
                    "class": "nav",
                    "children": [
                        {
                            "tagName": "div",
                            "class": "nav-column",
                            "children": [
                                {
                                    "tagName": "span",
                                    "class": "title",
                                    "content": "Limited Time"
                                },
                                {
                                    "tagName": "ul",
                                    "children": [
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "Sport Outfit Offer"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "tagName": "span",
                                    "class": "title",
                                    "content": "Styles"
                                },
                                {
                                    "tagName": "ul",
                                    "children": [
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "Front-Close"
                                                }
                                            ]
                                        },
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "Racerback"
                                                }
                                            ]
                                        },
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "Wireless"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "tagName": "span",
                                    "class": "title",
                                    "children": [
                                        {
                                            "tagName": "a",
                                            "content": "All Sport Bras",
                                            "children": [
                                                {
                                                    "tagName": "i",
                                                    "class": [
                                                        "fa",
                                                        "fa-chevron-right"
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "tagName": "div",
                            "class": "nav-column",
                            "children": [
                                {
                                    "tagName": "span",
                                    "class": "title",
                                    "content": "Support"
                                },
                                {
                                    "tagName": "ul",
                                    "children": [
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "Maximum"
                                                }
                                            ]
                                        },
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "Medium"
                                                }
                                            ]
                                        },
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "Minimum"
                                                }
                                            ]
                                        },
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "All Support Levels"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "tagName": "div",
                            "class": "nav-column",
                            "children": [
                                {
                                    "tagName": "span",
                                    "class": "title",
                                    "content": "Complete The Look"
                                },
                                {
                                    "tagName": "ul",
                                    "children": [
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "Tops"
                                                }
                                            ]
                                        },
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "Bottoms"
                                                }
                                            ]
                                        },
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "All Sport Apparel"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "tagName": "div",
                            "class": "nav-column",
                            "children": [
                                {
                                    "tagName": "span",
                                    "class": "title",
                                    "content": "What's Hot Now"
                                },
                                {
                                    "tagName": "ul",
                                    "children": [
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "Just In: Angel Max Sport Bra"
                                                }
                                            ]
                                        },
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "Train Like An Angel"
                                                }
                                            ]
                                        },
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "2/822,65₴ Sport Bras"
                                                }
                                            ]
                                        },
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "Get The Look"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "tagName": "span",
                                    "class": "title",
                                    "children": [
                                        {
                                            "tagName": "a",
                                            "content": "Sport Panties",
                                            "children": [
                                                {
                                                    "tagName": "i",
                                                    "class": [
                                                        "fa",
                                                        "fa-chevron-right"
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "tagName": "div",
                            "class": "nav-column",
                            "children": [
                                {
                                    "tagName": "span",
                                    "class": "title",
                                    "content": "Sport Bra Guide"
                                },
                                {
                                    "tagName": "ul",
                                    "children": [
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "Explore the Guide"
                                                }
                                            ]
                                        },
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "Find Your Perfect Fit"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "tagName": "span",
                                    "class": "title",
                                    "children": [
                                        {
                                            "tagName": "a",
                                            "content": "Gift Cards",
                                            "children": [
                                                {
                                                    "tagName": "i",
                                                    "class": [
                                                        "fa",
                                                        "fa-chevron-right"
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            }
            ,

            {
                "anchor": "a",
                "content": "Sleep",
                "link": '/sleep',
                "section":
                {
                    "tagName": "section",
                    "class": "nav",
                    "children": [
                        {
                            "tagName": "div",
                            "class": "nav-column",
                            "children": [
                                {
                                    "tagName": "span",
                                    "class": "title",
                                    "content": "Styles"
                                },
                                {
                                    "tagName": "ul",
                                    "children": [
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "Pajamas"
                                                }
                                            ]
                                        },
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "Sleepshirts"
                                                }
                                            ]
                                        },
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "Robes & Kimonos"
                                                }
                                            ]
                                        },
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "Loungewear"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "tagName": "span",
                                    "class": "title",
                                    "children": [
                                        {
                                            "tagName": "a",
                                            "content": "All Sleep",
                                            "children": [
                                                {
                                                    "tagName": "i",
                                                    "class": [
                                                        "fa",
                                                        "fa-chevron-right"
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "tagName": "div",
                            "class": "nav-column",
                            "children": [
                                {
                                    "tagName": "span",
                                    "class": "title",
                                    "content": "Pajamas"
                                },
                                {
                                    "tagName": "ul",
                                    "children": [
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "PJ Sets"
                                                }
                                            ]
                                        },
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "Sleep Tops"
                                                }
                                            ]
                                        },
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "Sleep Bottoms"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "tagName": "div",
                            "class": "nav-column",
                            "children": [
                                {
                                    "tagName": "span",
                                    "class": "title",
                                    "content": "More To Love"
                                },
                                {
                                    "tagName": "ul",
                                    "children": [
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "2/1 096,87 ₴ Styles"
                                                }
                                            ]
                                        },
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "1 371,08 ₴ & Under Styles"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "tagName": "div",
                            "class": "nav-column",
                            "children": [
                                {
                                    "tagName": "span",
                                    "class": "title",
                                    "content": "What's Hot Now"
                                },
                                {
                                    "tagName": "ul",
                                    "children": [
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "New Arrivals"
                                                }
                                            ]
                                        },
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "Spotlight On: Mix & Match Styles"
                                                }
                                            ]
                                        },
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "Angel Signature Collection"
                                                }
                                            ]
                                        },
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "Online Exclusives"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "tagName": "div",
                            "class": "nav-column",
                            "children": [
                                {
                                    "tagName": "span",
                                    "class": "title",
                                    "children": [
                                        {
                                            "tagName": "a",
                                            "content": "Gift Cards",
                                            "children": [
                                                {
                                                    "tagName": "i",
                                                    "class": [
                                                        "fa",
                                                        "fa-chevron-right"
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            }
            ,

            {
                "anchor": "a",
                "content": "Beauty",
                "link": '/beauty',
                "section":
                {
                    "tagName": "section",
                    "class": "nav",
                    "children": [
                        {
                            "tagName": "div",
                            "class": "nav-column",
                            "children": [
                                {
                                    "tagName": "span",
                                    "class": "title",
                                    "content": "Categories"
                                },
                                {
                                    "tagName": "ul",
                                    "children": [
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "Fragrance"
                                                }
                                            ]
                                        },
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "Body Mists"
                                                }
                                            ]
                                        },
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "Body Care"
                                                }
                                            ]
                                        },
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "Bags & Accessories"
                                                }
                                            ]
                                        },
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "Cosmetic Bags"
                                                }
                                            ]
                                        },
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "Rollerballs & Travel Size"
                                                }
                                            ]
                                        },
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "Lip"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "tagName": "span",
                                    "class": "title",
                                    "children": [
                                        {
                                            "tagName": "a",
                                            "content": "All Beauty",
                                            "children": [
                                                {
                                                    "tagName": "i",
                                                    "class": [
                                                        "fa",
                                                        "fa-chevron-right"
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "tagName": "div",
                            "class": "nav-column",
                            "children": [
                                {
                                    "tagName": "span",
                                    "class": "title",
                                    "content": "More To Love"
                                },
                                {
                                    "tagName": "ul",
                                    "children": [
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "191,95 ₴ & Under The Mist Collection"
                                                }
                                            ]
                                        },
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "2/493,59 ₴ Lip Essentials"
                                                }
                                            ]
                                        },
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "Limited Time: 2/822,65 ₴ Fragrance Mists & Lotions"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "tagName": "div",
                            "class": "nav-column",
                            "children": [
                                {
                                    "tagName": "span",
                                    "class": "title",
                                    "content": "Bestselling Scents"
                                },
                                {
                                    "tagName": "ul",
                                    "children": [
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "Just In: Love Fragrance"
                                                }
                                            ]
                                        },
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "Bombshell: Our #1 Fragrance"
                                                }
                                            ]
                                        },
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "Tease: The Ultimate Flirt"
                                                }
                                            ]
                                        },
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "Wicked: 99% Angel"
                                                }
                                            ]
                                        },
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "Crush: A Total Rush"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "tagName": "div",
                            "class": "nav-column",
                            "children": [
                                {
                                    "tagName": "span",
                                    "class": "title",
                                    "children": [
                                        {
                                            "tagName": "a",
                                            "content": "Gift Cards",
                                            "children": [
                                                {
                                                    "tagName": "i",
                                                    "class": [
                                                        "fa",
                                                        "fa-chevron-right"
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            }
            ,

            {
                "anchor": "a",
                "content": "Accessories",
                "link": '/accessories',
                "section":
                {
                    "tagName": "section",
                    "class": "nav",
                    "children": [
                        {
                            "tagName": "div",
                            "class": "nav-column",
                            "children": [
                                {
                                    "tagName": "span",
                                    "class": "title",
                                    "children": [
                                        {
                                            "tagName": "a",
                                            "content": "All Bags & Accessories",
                                            "children": [
                                                {
                                                    "tagName": "i",
                                                    "class": [
                                                        "fa",
                                                        "fa-chevron-right"
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "tagName": "div",
                            "class": "nav-column",
                            "children": [
                                {
                                    "tagName": "span",
                                    "class": "title",
                                    "content": "Styles"
                                },
                                {
                                    "tagName": "ul",
                                    "children": [
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "Bags & Backpacks"
                                                }
                                            ]
                                        },
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "Wallets"
                                                }
                                            ]
                                        },
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "Cosmetic Bags"
                                                }
                                            ]
                                        },
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "Charms & Keychains"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "tagName": "div",
                            "class": "nav-column",
                            "children": [
                                {
                                    "tagName": "span",
                                    "class": "title",
                                    "content": "Trending Now"
                                },
                                {
                                    "tagName": "ul",
                                    "children": [
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "New: Love Collection"
                                                }
                                            ]
                                        },
                                        {
                                            "tagName": "li",
                                            "children": [
                                                {
                                                    "tagName": "a",
                                                    "content": "1 096,87 ₴ & Under Accessories"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "tagName": "div",
                            "class": "nav-column",
                            "children": [
                                {
                                    "tagName": "span",
                                    "class": "title",
                                    "children": [
                                        {
                                            "tagName": "a",
                                            "content": "Gift Cards",
                                            "children": [
                                                {
                                                    "tagName": "i",
                                                    "class": [
                                                        "fa",
                                                        "fa-chevron-right"
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            }
            ,

            {
                "anchor": "a",
                "content": "Sale",
                "link": '/sale',
                "section":
                {
                    "tagName": "section",
                    "class": "nav",
                    "children": [
                        {
                            "tagName": "div",
                            "class": "nav-column",
                            "children": [
                                {
                                    "tagName": "span",
                                    "class": "title",
                                    "children": [
                                        {
                                            "tagName": "a",
                                            "content": "Bras",
                                            "children": [
                                                {
                                                    "tagName": "i",
                                                    "class": [
                                                        "fa",
                                                        "fa-chevron-right"
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "tagName": "span",
                                    "class": "title",
                                    "children": [
                                        {
                                            "tagName": "a",
                                            "content": "Panties",
                                            "children": [
                                                {
                                                    "tagName": "i",
                                                    "class": [
                                                        "fa",
                                                        "fa-chevron-right"
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "tagName": "span",
                                    "class": "title",
                                    "children": [
                                        {
                                            "tagName": "a",
                                            "content": "Lingerie",
                                            "children": [
                                                {
                                                    "tagName": "i",
                                                    "class": [
                                                        "fa",
                                                        "fa-chevron-right"
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "tagName": "span",
                                    "class": "title",
                                    "children": [
                                        {
                                            "tagName": "a",
                                            "content": "Sleep",
                                            "children": [
                                                {
                                                    "tagName": "i",
                                                    "class": [
                                                        "fa",
                                                        "fa-chevron-right"
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "tagName": "div",
                            "class": "nav-column",
                            "children": [
                                {
                                    "tagName": "span",
                                    "class": "title",
                                    "children": [
                                        {
                                            "tagName": "a",
                                            "content": "Sport",
                                            "children": [
                                                {
                                                    "tagName": "i",
                                                    "class": [
                                                        "fa",
                                                        "fa-chevron-right"
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "tagName": "span",
                                    "class": "title",
                                    "children": [
                                        {
                                            "tagName": "a",
                                            "content": "Beauty & Accessories",
                                            "children": [
                                                {
                                                    "tagName": "i",
                                                    "class": [
                                                        "fa",
                                                        "fa-chevron-right"
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "tagName": "span",
                                    "class": "title",
                                    "children": [
                                        {
                                            "tagName": "a",
                                            "content": "PINK",
                                            "children": [
                                                {
                                                    "tagName": "i",
                                                    "class": [
                                                        "fa",
                                                        "fa-chevron-right"
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "tagName": "span",
                                    "class": "title",
                                    "children": [
                                        {
                                            "tagName": "a",
                                            "content": "PINK MLB® Collection",
                                            "children": [
                                                {
                                                    "tagName": "i",
                                                    "class": [
                                                        "fa",
                                                        "fa-chevron-right"
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "tagName": "div",
                            "class": "nav-column",
                            "children": [
                                {
                                    "tagName": "span",
                                    "class": "title",
                                    "children": [
                                        {
                                            "tagName": "a",
                                            "content": "Gift Cards",
                                            "children": [
                                                {
                                                    "tagName": "i",
                                                    "class": [
                                                        "fa",
                                                        "fa-chevron-right"
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            }
            ,

            {
                "anchor": "a",
                "content": "Fashion Show",
                "link": '/fashion-show'
            }

        ],
        countries: [
            {
                "content": "United States / U.S. Territory",
                "value": "US"
            },
            {
                "content": "Canada",
                "value": "CA"
            },
            {
                "content": "Military APO / DPO / FPO",
                "value": "MI"
            },
            {
                "content": "Aland Islands",
                "value": "AX"
            },
            {
                "content": "Albania",
                "value": "AL"
            },
            {
                "content": "Algeria",
                "value": "DZ"
            },
            {
                "content": "Andorra",
                "value": "AD"
            },
            {
                "content": "Angola",
                "value": "AO"
            },
            {
                "content": "Anguilla",
                "value": "AI"
            },
            {
                "content": "Antigua & Barbuda",
                "value": "AG"
            },
            {
                "content": "Argentina",
                "value": "AR"
            },
            {
                "content": "Armenia",
                "value": "AM"
            },
            {
                "content": "Aruba",
                "value": "AW"
            },
            {
                "content": "Australia",
                "value": "AU"
            },
            {
                "content": "Austria",
                "value": "AT"
            },
            {
                "content": "Azerbaijan",
                "value": "AZ"
            },
            {
                "content": "Bahamas",
                "value": "BS"
            },
            {
                "content": "Bahrain",
                "value": "BH"
            },
            {
                "content": "Bangladesh",
                "value": "BD"
            },
            {
                "content": "Barbados",
                "value": "BB"
            },
            {
                "content": "Belarus",
                "value": "BY"
            },
            {
                "content": "Belgium",
                "value": "BE"
            },
            {
                "content": "Belize",
                "value": "BZ"
            },
            {
                "content": "Benin",
                "value": "BJ"
            },
            {
                "content": "Bermuda",
                "value": "BM"
            },
            {
                "content": "Bhutan",
                "value": "BT"
            },
            {
                "content": "Bolivia",
                "value": "BO"
            },
            {
                "content": "Bonaire, Sint Eustatius & Saba",
                "value": "BQ"
            },
            {
                "content": "Bosnia-Herzegovina",
                "value": "BA"
            },
            {
                "content": "Botswana",
                "value": "BW"
            },
            {
                "content": "Brazil",
                "value": "BR"
            },
            {
                "content": "British Virgin Islands",
                "value": "VG"
            },
            {
                "content": "Brunei Darussalam",
                "value": "BN"
            },
            {
                "content": "Bulgaria",
                "value": "BG"
            },
            {
                "content": "Burkina Faso",
                "value": "BF"
            },
            {
                "content": "Burma (Myanmar)",
                "value": "MM"
            },
            {
                "content": "Burundi",
                "value": "BI"
            },
            {
                "content": "Cambodia",
                "value": "KH"
            },
            {
                "content": "Cameroon",
                "value": "CM"
            },
            {
                "content": "Cape Verde",
                "value": "CV"
            },
            {
                "content": "Cayman Islands",
                "value": "KY"
            },
            {
                "content": "Central African Republic",
                "value": "CF"
            },
            {
                "content": "Chad",
                "value": "TD"
            },
            {
                "content": "Chile",
                "value": "CL"
            },
            {
                "content": "Colombia",
                "value": "CO"
            },
            {
                "content": "Congo (Brazzaville)",
                "value": "CG"
            },
            {
                "content": "Cook Islands",
                "value": "CK"
            },
            {
                "content": "Costa Rica",
                "value": "CR"
            },
            {
                "content": "Croatia",
                "value": "HR"
            },
            {
                "content": "Curacao",
                "value": "CW"
            },
            {
                "content": "Cyprus",
                "value": "CY"
            },
            {
                "content": "Czech Republic",
                "value": "CZ"
            },
            {
                "content": "Democratic Republic of Congo",
                "value": "CD"
            },
            {
                "content": "Denmark",
                "value": "DK"
            },
            {
                "content": "Djibouti",
                "value": "DJ"
            },
            {
                "content": "Dominica",
                "value": "DM"
            },
            {
                "content": "Dominican Republic",
                "value": "DO"
            },
            {
                "content": "East Timor",
                "value": "TP"
            },
            {
                "content": "Ecuador",
                "value": "EC"
            },
            {
                "content": "Egypt",
                "value": "EG"
            },
            {
                "content": "El Salvador",
                "value": "SV"
            },
            {
                "content": "Equatorial Guinea",
                "value": "GQ"
            },
            {
                "content": "Eritrea",
                "value": "ER"
            },
            {
                "content": "Estonia",
                "value": "EE"
            },
            {
                "content": "Ethiopia",
                "value": "ET"
            },
            {
                "content": "Faroe Islands",
                "value": "FO"
            },
            {
                "content": "Fiji",
                "value": "FJ"
            },
            {
                "content": "Finland",
                "value": "FI"
            },
            {
                "content": "France",
                "value": "FR"
            },
            {
                "content": "French Guiana",
                "value": "GF"
            },
            {
                "content": "French Polynesia",
                "value": "PF"
            },
            {
                "content": "Gabon",
                "value": "GA"
            },
            {
                "content": "Gambia",
                "value": "GM"
            },
            {
                "content": "Gaza Strip",
                "value": "GZ"
            },
            {
                "content": "Georgia",
                "value": "GE"
            },
            {
                "content": "Germany",
                "value": "DE"
            },
            {
                "content": "Ghana",
                "value": "GH"
            },
            {
                "content": "Gibraltar",
                "value": "GI"
            },
            {
                "content": "Greece",
                "value": "GR"
            },
            {
                "content": "Greenland",
                "value": "GL"
            },
            {
                "content": "Grenada",
                "value": "GD"
            },
            {
                "content": "Guadeloupe",
                "value": "GP"
            },
            {
                "content": "Guatemala",
                "value": "GT"
            },
            {
                "content": "Guinea",
                "value": "GN"
            },
            {
                "content": "Guinea-Bissau",
                "value": "GW"
            },
            {
                "content": "Guyana",
                "value": "GY"
            },
            {
                "content": "Haiti",
                "value": "HT"
            },
            {
                "content": "Honduras",
                "value": "HN"
            },
            {
                "content": "Hong Kong",
                "value": "HK"
            },
            {
                "content": "Hungary",
                "value": "HU"
            },
            {
                "content": "Iceland",
                "value": "IS"
            },
            {
                "content": "India",
                "value": "IN"
            },
            {
                "content": "Indonesia",
                "value": "ID"
            },
            {
                "content": "Iraq",
                "value": "IQ"
            },
            {
                "content": "Ireland",
                "value": "IE"
            },
            {
                "content": "Isle of Man",
                "value": "IM"
            },
            {
                "content": "Israel",
                "value": "IL"
            },
            {
                "content": "Italy",
                "value": "IT"
            },
            {
                "content": "Ivory Coast",
                "value": "CI"
            },
            {
                "content": "Jamaica",
                "value": "JM"
            },
            {
                "content": "Japan",
                "value": "JP"
            },
            {
                "content": "Jordan",
                "value": "JO"
            },
            {
                "content": "Kazakhstan",
                "value": "KZ"
            },
            {
                "content": "Kenya",
                "value": "KE"
            },
            {
                "content": "Kiribati",
                "value": "KI"
            },
            {
                "content": "Kuwait",
                "value": "KW"
            },
            {
                "content": "Kyrgyzstan",
                "value": "KG"
            },
            {
                "content": "Laos Peoples Democratic Republic",
                "value": "LA"
            },
            {
                "content": "Latvia",
                "value": "LV"
            },
            {
                "content": "Lebanon",
                "value": "LB"
            },
            {
                "content": "Lesotho",
                "value": "LS"
            },
            {
                "content": "Liberia",
                "value": "LR"
            },
            {
                "content": "Liechtenstein",
                "value": "LI"
            },
            {
                "content": "Lithuania",
                "value": "LT"
            },
            {
                "content": "Luxembourg",
                "value": "LU"
            },
            {
                "content": "Macau",
                "value": "MO"
            },
            {
                "content": "Macedonia",
                "value": "MK"
            },
            {
                "content": "Madagascar",
                "value": "MG"
            },
            {
                "content": "Malawi",
                "value": "MW"
            },
            {
                "content": "Malaysia",
                "value": "MY"
            },
            {
                "content": "Maldives",
                "value": "MV"
            },
            {
                "content": "Mali",
                "value": "ML"
            },
            {
                "content": "Malta",
                "value": "MT"
            },
            {
                "content": "Martinique",
                "value": "MQ"
            },
            {
                "content": "Mauritania",
                "value": "MR"
            },
            {
                "content": "Mauritius",
                "value": "MU"
            },
            {
                "content": "Mexico",
                "value": "MX"
            },
            {
                "content": "Moldova",
                "value": "MD"
            },
            {
                "content": "Monaco",
                "value": "MC"
            },
            {
                "content": "Mongolia",
                "value": "MN"
            },
            {
                "content": "Montenegro",
                "value": "ME"
            },
            {
                "content": "Montserrat",
                "value": "MS"
            },
            {
                "content": "Morocco",
                "value": "MA"
            },
            {
                "content": "Mozambique",
                "value": "MZ"
            },
            {
                "content": "Namibia",
                "value": "NA"
            },
            {
                "content": "Nepal",
                "value": "NP"
            },
            {
                "content": "Netherlands",
                "value": "NL"
            },
            {
                "content": "New Caledonia",
                "value": "NC"
            },
            {
                "content": "New Zealand",
                "value": "NZ"
            },
            {
                "content": "Nicaragua",
                "value": "NI"
            },
            {
                "content": "Niger",
                "value": "NE"
            },
            {
                "content": "Nigeria",
                "value": "NG"
            },
            {
                "content": "Norfolk Island",
                "value": "NF"
            },
            {
                "content": "Norway",
                "value": "NO"
            },
            {
                "content": "Oman",
                "value": "OM"
            },
            {
                "content": "Pakistan",
                "value": "PK"
            },
            {
                "content": "Panama",
                "value": "PA"
            },
            {
                "content": "Papua New Guinea",
                "value": "PG"
            },
            {
                "content": "Paraguay",
                "value": "PY"
            },
            {
                "content": "Peru",
                "value": "PE"
            },
            {
                "content": "Philippines",
                "value": "PH"
            },
            {
                "content": "Poland",
                "value": "PL"
            },
            {
                "content": "Portugal",
                "value": "PT"
            },
            {
                "content": "Qatar",
                "value": "QA"
            },
            {
                "content": "Reunion",
                "value": "RE"
            },
            {
                "content": "Romania",
                "value": "RO"
            },
            {
                "content": "Russia",
                "value": "RU"
            },
            {
                "content": "Saint Barthelemy",
                "value": "BL"
            },
            {
                "content": "Saint Lucia",
                "value": "LC"
            },
            {
                "content": "Saint Martin (French Part)",
                "value": "MF"
            },
            {
                "content": "Samoa",
                "value": "WS"
            },
            {
                "content": "San Marino",
                "value": "SM"
            },
            {
                "content": "Saudi Arabia",
                "value": "SA"
            },
            {
                "content": "Senegal",
                "value": "SN"
            },
            {
                "content": "Serbia",
                "value": "RS"
            },
            {
                "content": "Seychelles",
                "value": "SC"
            },
            {
                "content": "Sierra Leone",
                "value": "SL"
            },
            {
                "content": "Singapore",
                "value": "SG"
            },
            {
                "content": "Sint Maarten (Dutch Part)",
                "value": "SX"
            },
            {
                "content": "Slovakia",
                "value": "SK"
            },
            {
                "content": "Slovenia",
                "value": "SI"
            },
            {
                "content": "Solomon Islands",
                "value": "SB"
            },
            {
                "content": "South Africa",
                "value": "ZA"
            },
            {
                "content": "South Korea",
                "value": "KR"
            },
            {
                "content": "Spain",
                "value": "ES"
            },
            {
                "content": "Sri Lanka",
                "value": "LK"
            },
            {
                "content": "St. Kitts & Nevis",
                "value": "KN"
            },
            {
                "content": "St. Vincent & The Grenadines",
                "value": "VC"
            },
            {
                "content": "Sudan",
                "value": "SD"
            },
            {
                "content": "Suriname",
                "value": "SR"
            },
            {
                "content": "Swaziland",
                "value": "SZ"
            },
            {
                "content": "Sweden",
                "value": "SE"
            },
            {
                "content": "Switzerland",
                "value": "CH"
            },
            {
                "content": "Syrian Arab Republic",
                "value": "SY"
            },
            {
                "content": "Taiwan",
                "value": "TW"
            },
            {
                "content": "Tajikistan",
                "value": "TJ"
            },
            {
                "content": "Tanzania",
                "value": "TZ"
            },
            {
                "content": "Thailand",
                "value": "TH"
            },
            {
                "content": "Togo",
                "value": "TG"
            },
            {
                "content": "Tonga",
                "value": "TO"
            },
            {
                "content": "Trinidad & Tobago",
                "value": "TT"
            },
            {
                "content": "Tunisia",
                "value": "TN"
            },
            {
                "content": "Turkey",
                "value": "TR"
            },
            {
                "content": "Turkmenistan",
                "value": "TM"
            },
            {
                "content": "Turks & Caicos Islands",
                "value": "TC"
            },
            {
                "content": "Tuvalu",
                "value": "TV"
            },
            {
                "content": "U.S. Minor Outlying Islands",
                "value": "UM"
            },
            {
                "content": "Uganda",
                "value": "UG"
            },
            {
                "content": "Ukraine",
                "value": "UA"
            },
            {
                "content": "United Arab Emirates",
                "value": "AE"
            },
            {
                "content": "United Kingdom",
                "value": "GB"
            },
            {
                "content": "Uruguay",
                "value": "UY"
            },
            {
                "content": "Uzbekistan",
                "value": "UZ"
            },
            {
                "content": "Vanuatu",
                "value": "VU"
            },
            {
                "content": "Vatican City",
                "value": "VA"
            },
            {
                "content": "Venezuela",
                "value": "VE"
            },
            {
                "content": "Vietnam",
                "value": "VN"
            },
            {
                "content": "Wallis & Futuna Islands",
                "value": "WF"
            },
            {
                "content": "Yemen",
                "value": "YE"
            },
            {
                "content": "Zambia",
                "value": "ZM"
            },
            {
                "content": "Zimbabwe",
                "value": "ZW"
            }
        ],
        products: [
            {
                id: uuid.v4().substr(0, 8), alt: "bra",
                name: 'Dream Angels Demi Bra',
                description: 'This dreamy demi is even more heavenly, with softer Memory Fit lining that conforms to your curves, a smoothing U-shaped back and stretchier lace sides for a flawless, ultra-comfy fit.',
                categories: ['bras', 'demi'],
                price: 1736.48,
                link: '/bras/demi',
                bandSize: [
                    { title: 32 },
                    { title: 34 },
                    { title: 36, missColors: ['Black with Lace Back'] },
                    { title: 38 },
                    { title: 40, missCupSize: ['b'] }
                ],
                cupSize: [
                    { title: 'a' },
                    { title: 'b' },
                    { title: 'c' },
                    { title: 'd' },
                    { title: 'dd' },
                    { title: 'ddd', missBandSize: [32], missColors: ['Black with Lace Back'] }
                ],
                colors: [
                    { title: 'Black with Lace Back', alt: 'Black with Lace Back', src: '../../assets/V507782_BVJ_SW.jpg' },
                    { title: 'Vintage Rose with Lace Back', alt: 'Vintage Rose with Lace Back', src: '../../assets/V505878_S62_SW.jpg' },
                    { title: 'Pastel Blue with Lace Back', alt: 'Pastel Blue with Lace Back', src: '../../assets/V505781_CTQ_SW.jpg' }
                ],
                titleImage: { src: 'https://dm.victoriassecret.com/p/404x539/tif/b0/94/b0943a5c337f416bb4507840c519d244/058_H17_BRA_073_JT_030_e5699078.jpg', alt: 'bra' },
                images: [
                    {
                        src: 'https://dm.victoriassecret.com/p/404x539/tif/b0/94/b0943a5c337f416bb4507840c519d244/058_H17_BRA_073_JT_030_e5699078.jpg',
                        alt: 'bra'
                    },
                    {
                        src: 'https://dm.victoriassecret.com/p/404x539/tif/09/0a/090a39f0628a4221a88ac02c64105ee7/V504636_OM_F.jpg',
                        alt: 'bra'
                    },
                    {
                        src: 'https://dm.victoriassecret.com/p/404x539/tif/cc/87/cc87cc3d818248b49ff908cf08fd7b56/V504636_OM_B.jpg',
                        alt: 'bra'
                    },
                    {
                        src: 'https://dm.victoriassecret.com/p/404x539/tif/d9/34/d934f9c2a3564b3184d459e9a1b92820/V504636_OF_F.jpg',
                        alt: 'bra'
                    },
                ],
                rating: 4.3,
                quantity: 1,
                reviews: 240
            },
            {
                id: uuid.v4().substr(0, 8), alt: "bra",
                name: 'Perfect Coverage Bra',
                description: 'Our fullest coverage and our sexiest comfort meet in this supersoft bra with lighter Memory Fit lining that conforms to your curves and a smoothing U-shaped back and sides.',
                categories: ['bras', 'perfect-coverage'],
                price: 1375.29,
                link: '/bras/perfect-coverage',
                bandSize: [
                    { title: 32 },
                    { title: 34 },
                    { title: 36, missColors: ['Black with Lace Back'] },
                    { title: 38 },
                    { title: 40, missCupSize: ['b'] }
                ],
                cupSize: [
                    { title: 'b' },
                    { title: 'c' },
                    { title: 'd' },
                    { title: 'dd' },
                    { title: 'ddd', missBandSize: [32], missColors: ['Black with Lace Back'] }
                ],
                colors: [
                    { title: 'Black with Lace Back', alt: 'Black with Lace Back', src: '../../assets/V507782_BVJ_SW.jpg' },
                    { title: 'Vintage Rose with Lace Back', alt: 'Vintage Rose with Lace Back', src: '../../assets/V505878_S62_SW.jpg' },
                    { title: 'Pastel Blue with Lace Back', alt: 'Pastel Blue with Lace Back', src: '../../assets/V505781_CTQ_SW.jpg' }
                ],
                titleImage: { src: '../../assets/064_H17_BRA_072_JT_030_e5699631.jpg', alt: 'bra' },
                images: [{ src: '../../assets/064_H17_BRA_072_JT_030_e5699631.jpg', alt: 'bra' }, { src: '../../assets/064_H17_BRA_072_JT_030_e5699631.jpg', alt: 'bra' }, { src: '../../assets/064_H17_BRA_072_JT_030_e5699631.jpg', alt: 'bra' }, { src: '../../assets/064_H17_BRA_072_JT_030_e5699631.jpg', alt: 'bra' },],
                rating: 4.4,
                quantity: 1,
                reviews: 845
            },
            {
                id: uuid.v4().substr(0, 8), alt: "bra",
                name: 'Wicked Unlined Uplift Bra',
                description: 'A little lift goes a long way: the push-up without padding in eyelash lace gives a comfy, natural boost thanks to a hidden sling.',
                categories: ['bras', 'balconet'],
                price: 958.53,
                link: '/bras/balconet',
                bandSize: [
                    { title: 32 },
                    { title: 34 },
                    { title: 36, missColors: ['Black with Lace Back'] },
                    { title: 38 },
                ],
                cupSize: [
                    { title: 'a' },
                    { title: 'b' },
                    { title: 'c' },
                    { title: 'd' },
                    { title: 'dd' },
                    { title: 'ddd', missBandSize: [32], missColors: ['Black with Lace Back'] }
                ],
                colors: [
                    { title: 'Black with Lace Back', alt: 'Black with Lace Back', src: '../../assets/V507782_BVJ_SW.jpg' },
                    { title: 'Vintage Rose with Lace Back', alt: 'Vintage Rose with Lace Back', src: '../../assets/V505878_S62_SW.jpg' },
                    { title: 'Pastel Blue with Lace Back', alt: 'Pastel Blue with Lace Back', src: '../../assets/V505781_CTQ_SW.jpg' }
                ],
                titleImage: { src: '../../assets/060_F17_BRA_062_EH_057_e5257238.jpg', alt: 'bra' },
                images: [{ src: '../../assets/064_H17_BRA_072_JT_030_e5699631.jpg', alt: 'bra' }, { src: '../../assets/064_H17_BRA_072_JT_030_e5699631.jpg', alt: 'bra' }, { src: '../../assets/064_H17_BRA_072_JT_030_e5699631.jpg', alt: 'bra' }, { src: '../../assets/064_H17_BRA_072_JT_030_e5699631.jpg', alt: 'bra' },],
                rating: 4.5,
                quantity: 1,
                reviews: 565
            },
            {
                id: uuid.v4().substr(0, 8), alt: "bra",
                name: 'Multi-Way Bra',
                description: 'Five ways to wear it for plenty of style options—in a supersoft fabric with lighter Memory Fit for extra support as it conforms to your curves.',
                categories: ['bras', 'strapless'],
                price: 1541.99,
                link: '/bras/strapless',
                bandSize: [
                    { title: 32 },
                    { title: 34 },
                    { title: 36, missColors: ['Black with Lace Back'] },
                    { title: 38 }
                ],
                cupSize: [
                    { title: 'a' },
                    { title: 'b' },
                    { title: 'c' },
                    { title: 'd' },
                    { title: 'dd' },
                    { title: 'ddd', missBandSize: [32], missColors: ['Black with Lace Back'] }
                ],
                colors: [
                    { title: 'Black with Lace Back', alt: 'Black with Lace Back', src: '../../assets/V507782_BVJ_SW.jpg' },
                    { title: 'Vintage Rose with Lace Back', alt: 'Vintage Rose with Lace Back', src: '../../assets/V505878_S62_SW.jpg' },
                    { title: 'Pastel Blue with Lace Back', alt: 'Pastel Blue with Lace Back', src: '../../assets/V505781_CTQ_SW.jpg' }
                ],
                titleImage: { src: '../../assets/038_F17_BRA_093_JS_070_e5297751.jpg', alt: 'bra' },
                images: [{ src: '../../assets/064_H17_BRA_072_JT_030_e5699631.jpg', alt: 'bra' }, { src: '../../assets/064_H17_BRA_072_JT_030_e5699631.jpg', alt: 'bra' }, { src: '../../assets/064_H17_BRA_072_JT_030_e5699631.jpg', alt: 'bra' }, { src: '../../assets/064_H17_BRA_072_JT_030_e5699631.jpg', alt: 'bra' },],
                rating: 4.3,
                quantity: 1,
                reviews: 283
            },
            {
                id: uuid.v4().substr(0, 8), alt: "bra",
                name: 'Dream Angels Demi Bra',
                description: 'This dreamy demi is even more heavenly, with softer Memory Fit lining that conforms to your curves, a smoothing U-shaped back and stretchier lace sides for a flawless, ultra-comfy fit.',
                categories: ['bras', 'demi'],
                price: 1736.48,
                link: '/bras/demi',
                bandSize: [
                    { title: 32 },
                    { title: 34 },
                    { title: 36, missColors: ['Black with Lace Back'] },
                    { title: 38 },
                    { title: 40, missCupSize: ['b'] }
                ],
                cupSize: [
                    { title: 'a' },
                    { title: 'b' },
                    { title: 'c' },
                    { title: 'd' },
                    { title: 'dd' },
                    { title: 'ddd', missBandSize: [32], missColors: ['Black with Lace Back'] }
                ],
                colors: [
                    { title: 'Black with Lace Back', alt: 'Black with Lace Back', src: '../../assets/V507782_BVJ_SW.jpg' },
                    { title: 'Vintage Rose with Lace Back', alt: 'Vintage Rose with Lace Back', src: '../../assets/V505878_S62_SW.jpg' },
                    { title: 'Pastel Blue with Lace Back', alt: 'Pastel Blue with Lace Back', src: '../../assets/V505781_CTQ_SW.jpg' }
                ],
                titleImage: { src: '../../assets/064_H17_BRA_072_JT_030_e5699631.jpg', alt: 'bra' },
                images: [
                    {
                        src: '../../assets/064_H17_BRA_072_JT_030_e5699631.jpg',
                        alt: 'bra'
                    },
                    {
                        src: '../../assets/064_H17_BRA_072_JT_030_e5699631.jpg',
                        alt: 'bra'
                    },
                    {
                        src: '../../assets/064_H17_BRA_072_JT_030_e5699631.jpg',
                        alt: 'bra'
                    },
                    {
                        src: '../../assets/064_H17_BRA_072_JT_030_e5699631.jpg',
                        alt: 'bra'
                    },
                ],
                rating: 4.3,
                quantity: 1,
                reviews: 240
            },
            {
                id: uuid.v4().substr(0, 8), alt: "bra",
                name: 'Perfect Coverage Bra',
                description: 'Our fullest coverage and our sexiest comfort meet in this supersoft bra with lighter Memory Fit lining that conforms to your curves and a smoothing U-shaped back and sides.',
                categories: ['bras', 'perfect-coverage'],
                price: 1375.29,
                link: '/bras/perfect-coverage',
                bandSize: [
                    { title: 32 },
                    { title: 34 },
                    { title: 36, missColors: ['Black with Lace Back'] },
                    { title: 38 },
                    { title: 40, missCupSize: ['b'] }
                ],
                cupSize: [
                    { title: 'b' },
                    { title: 'c' },
                    { title: 'd' },
                    { title: 'dd' },
                    { title: 'ddd', missBandSize: [32], missColors: ['Black with Lace Back'] }
                ],
                colors: [
                    { title: 'Black with Lace Back', alt: 'Black with Lace Back', src: '../../assets/V507782_BVJ_SW.jpg' },
                    { title: 'Vintage Rose with Lace Back', alt: 'Vintage Rose with Lace Back', src: '../../assets/V505878_S62_SW.jpg' },
                    { title: 'Pastel Blue with Lace Back', alt: 'Pastel Blue with Lace Back', src: '../../assets/V505781_CTQ_SW.jpg' }
                ],
                titleImage: { src: '../../assets/064_H17_BRA_072_JT_030_e5699631.jpg', alt: 'bra' },
                images: [{ src: '../../assets/064_H17_BRA_072_JT_030_e5699631.jpg', alt: 'bra' }, { src: '../../assets/064_H17_BRA_072_JT_030_e5699631.jpg', alt: 'bra' }, { src: '../../assets/064_H17_BRA_072_JT_030_e5699631.jpg', alt: 'bra' }, { src: '../../assets/064_H17_BRA_072_JT_030_e5699631.jpg', alt: 'bra' },],
                rating: 4.4,
                quantity: 1,
                reviews: 845
            },
            {
                id: uuid.v4().substr(0, 8), alt: "bra",
                name: 'Wicked Unlined Uplift Bra',
                description: 'A little lift goes a long way: the push-up without padding in eyelash lace gives a comfy, natural boost thanks to a hidden sling.',
                categories: ['bras', 'balconet'],
                price: 958.53,
                link: '/bras/balconet',
                bandSize: [
                    { title: 32 },
                    { title: 34 },
                    { title: 36, missColors: ['Black with Lace Back'] },
                    { title: 38 },
                ],
                cupSize: [
                    { title: 'a' },
                    { title: 'b' },
                    { title: 'c' },
                    { title: 'd' },
                    { title: 'dd' },
                    { title: 'ddd', missBandSize: [32], missColors: ['Black with Lace Back'] }
                ],
                colors: [
                    { title: 'Black with Lace Back', alt: 'Black with Lace Back', src: '../../assets/V507782_BVJ_SW.jpg' },
                    { title: 'Vintage Rose with Lace Back', alt: 'Vintage Rose with Lace Back', src: '../../assets/V505878_S62_SW.jpg' },
                    { title: 'Pastel Blue with Lace Back', alt: 'Pastel Blue with Lace Back', src: '../../assets/V505781_CTQ_SW.jpg' }
                ],
                titleImage: { src: '../../assets/060_F17_BRA_062_EH_057_e5257238.jpg', alt: 'bra' },
                images: [{ src: '../../assets/064_H17_BRA_072_JT_030_e5699631.jpg', alt: 'bra' }, { src: '../../assets/064_H17_BRA_072_JT_030_e5699631.jpg', alt: 'bra' }, { src: '../../assets/064_H17_BRA_072_JT_030_e5699631.jpg', alt: 'bra' }, { src: '../../assets/064_H17_BRA_072_JT_030_e5699631.jpg', alt: 'bra' },],
                rating: 4.5,
                quantity: 1,
                reviews: 565
            },
            {
                id: uuid.v4().substr(0, 8), alt: "bra",
                name: 'Multi-Way Bra',
                description: 'Five ways to wear it for plenty of style options—in a supersoft fabric with lighter Memory Fit for extra support as it conforms to your curves.',
                categories: ['bras', 'strapless'],
                price: 1541.99,
                link: '/bras/strapless',
                bandSize: [
                    { title: 32 },
                    { title: 34 },
                    { title: 36, missColors: ['Black with Lace Back'] },
                    { title: 38 }
                ],
                cupSize: [
                    { title: 'a' },
                    { title: 'b' },
                    { title: 'c' },
                    { title: 'd' },
                    { title: 'dd' },
                    { title: 'ddd', missBandSize: [32], missColors: ['Black with Lace Back'] }
                ],
                colors: [
                    { title: 'Black with Lace Back', alt: 'Black with Lace Back', src: '../../assets/V507782_BVJ_SW.jpg' },
                    { title: 'Vintage Rose with Lace Back', alt: 'Vintage Rose with Lace Back', src: '../../assets/V505878_S62_SW.jpg' },
                    { title: 'Pastel Blue with Lace Back', alt: 'Pastel Blue with Lace Back', src: '../../assets/V505781_CTQ_SW.jpg' }
                ],
                titleImage: { src: '../../assets/038_F17_BRA_093_JS_070_e5297751.jpg', alt: 'bra' },
                images: [{ src: '../../assets/064_H17_BRA_072_JT_030_e5699631.jpg', alt: 'bra' }, { src: '../../assets/064_H17_BRA_072_JT_030_e5699631.jpg', alt: 'bra' }, { src: '../../assets/064_H17_BRA_072_JT_030_e5699631.jpg', alt: 'bra' }, { src: '../../assets/064_H17_BRA_072_JT_030_e5699631.jpg', alt: 'bra' },],
                rating: 4.3,
                quantity: 1,
                reviews: 283
            },
            {
                id: uuid.v4().substr(0, 8), alt: "bra",
                name: 'Dream Angels Demi Bra',
                description: 'This dreamy demi is even more heavenly, with softer Memory Fit lining that conforms to your curves, a smoothing U-shaped back and stretchier lace sides for a flawless, ultra-comfy fit.',
                categories: ['bras', 'demi'],
                price: 1736.48,
                link: '/bras/demi',
                bandSize: [
                    { title: 32 },
                    { title: 34 },
                    { title: 36, missColors: ['Black with Lace Back'] },
                    { title: 38 },
                    { title: 40, missCupSize: ['b'] }
                ],
                cupSize: [
                    { title: 'a' },
                    { title: 'b' },
                    { title: 'c' },
                    { title: 'd' },
                    { title: 'dd' },
                    { title: 'ddd', missBandSize: [32], missColors: ['Black with Lace Back'] }
                ],
                colors: [
                    { title: 'Black with Lace Back', alt: 'Black with Lace Back', src: '../../assets/V507782_BVJ_SW.jpg' },
                    { title: 'Vintage Rose with Lace Back', alt: 'Vintage Rose with Lace Back', src: '../../assets/V505878_S62_SW.jpg' },
                    { title: 'Pastel Blue with Lace Back', alt: 'Pastel Blue with Lace Back', src: '../../assets/V505781_CTQ_SW.jpg' }
                ],
                titleImage: { src: '../../assets/064_H17_BRA_072_JT_030_e5699631.jpg', alt: 'bra' },
                images: [
                    {
                        src: '../../assets/064_H17_BRA_072_JT_030_e5699631.jpg',
                        alt: 'bra'
                    },
                    {
                        src: '../../assets/064_H17_BRA_072_JT_030_e5699631.jpg',
                        alt: 'bra'
                    },
                    {
                        src: '../../assets/064_H17_BRA_072_JT_030_e5699631.jpg',
                        alt: 'bra'
                    },
                    {
                        src: '../../assets/064_H17_BRA_072_JT_030_e5699631.jpg',
                        alt: 'bra'
                    },
                ],
                rating: 4.3,
                quantity: 1,
                reviews: 240
            },
            {
                id: uuid.v4().substr(0, 8), alt: "bra",
                name: 'Perfect Coverage Bra',
                description: 'Our fullest coverage and our sexiest comfort meet in this supersoft bra with lighter Memory Fit lining that conforms to your curves and a smoothing U-shaped back and sides.',
                categories: ['bras', 'perfect-coverage'],
                price: 1375.29,
                link: '/bras/perfect-coverage',
                bandSize: [
                    { title: 32 },
                    { title: 34 },
                    { title: 36, missColors: ['Black with Lace Back'] },
                    { title: 38 },
                    { title: 40, missCupSize: ['b'] }
                ],
                cupSize: [
                    { title: 'b' },
                    { title: 'c' },
                    { title: 'd' },
                    { title: 'dd' },
                    { title: 'ddd', missBandSize: [32], missColors: ['Black with Lace Back'] }
                ],
                colors: [
                    { title: 'Black with Lace Back', alt: 'Black with Lace Back', src: '../../assets/V507782_BVJ_SW.jpg' },
                    { title: 'Vintage Rose with Lace Back', alt: 'Vintage Rose with Lace Back', src: '../../assets/V505878_S62_SW.jpg' },
                    { title: 'Pastel Blue with Lace Back', alt: 'Pastel Blue with Lace Back', src: '../../assets/V505781_CTQ_SW.jpg' }
                ],
                titleImage: { src: '../../assets/064_H17_BRA_072_JT_030_e5699631.jpg', alt: 'bra' },
                images: [{ src: '../../assets/064_H17_BRA_072_JT_030_e5699631.jpg', alt: 'bra' }, { src: '../../assets/064_H17_BRA_072_JT_030_e5699631.jpg', alt: 'bra' }, { src: '../../assets/064_H17_BRA_072_JT_030_e5699631.jpg', alt: 'bra' }, { src: '../../assets/064_H17_BRA_072_JT_030_e5699631.jpg', alt: 'bra' },],
                rating: 4.4,
                quantity: 1,
                reviews: 845
            },
            {
                id: uuid.v4().substr(0, 8), alt: "bra",
                name: 'Wicked Unlined Uplift Bra',
                description: 'A little lift goes a long way: the push-up without padding in eyelash lace gives a comfy, natural boost thanks to a hidden sling.',
                categories: ['bras', 'balconet'],
                price: 958.53,
                link: '/bras/balconet',
                bandSize: [
                    { title: 32 },
                    { title: 34 },
                    { title: 36, missColors: ['Black with Lace Back'] },
                    { title: 38 },
                ],
                cupSize: [
                    { title: 'a' },
                    { title: 'b' },
                    { title: 'c' },
                    { title: 'd' },
                    { title: 'dd' },
                    { title: 'ddd', missBandSize: [32], missColors: ['Black with Lace Back'] }
                ],
                colors: [
                    { title: 'Black with Lace Back', alt: 'Black with Lace Back', src: '../../assets/V507782_BVJ_SW.jpg' },
                    { title: 'Vintage Rose with Lace Back', alt: 'Vintage Rose with Lace Back', src: '../../assets/V505878_S62_SW.jpg' },
                    { title: 'Pastel Blue with Lace Back', alt: 'Pastel Blue with Lace Back', src: '../../assets/V505781_CTQ_SW.jpg' }
                ],
                titleImage: { src: '../../assets/060_F17_BRA_062_EH_057_e5257238.jpg', alt: 'bra' },
                images: [{ src: '../../assets/064_H17_BRA_072_JT_030_e5699631.jpg', alt: 'bra' }, { src: '../../assets/064_H17_BRA_072_JT_030_e5699631.jpg', alt: 'bra' }, { src: '../../assets/064_H17_BRA_072_JT_030_e5699631.jpg', alt: 'bra' }, { src: '../../assets/064_H17_BRA_072_JT_030_e5699631.jpg', alt: 'bra' },],
                rating: 4.5,
                quantity: 1,
                reviews: 565
            },
            {
                id: uuid.v4().substr(0, 8), alt: "bra",
                name: 'Multi-Way Bra',
                description: 'Five ways to wear it for plenty of style options—in a supersoft fabric with lighter Memory Fit for extra support as it conforms to your curves.',
                categories: ['bras', 'strapless'],
                price: 1541.99,
                link: '/bras/strapless',
                bandSize: [
                    { title: 32 },
                    { title: 34 },
                    { title: 36, missColors: ['Black with Lace Back'] },
                    { title: 38 }
                ],
                cupSize: [
                    { title: 'a' },
                    { title: 'b' },
                    { title: 'c' },
                    { title: 'd' },
                    { title: 'dd' },
                    { title: 'ddd', missBandSize: [32], missColors: ['Black with Lace Back'] }
                ],
                colors: [
                    { title: 'Black with Lace Back', alt: 'Black with Lace Back', src: '../../assets/V507782_BVJ_SW.jpg' },
                    { title: 'Vintage Rose with Lace Back', alt: 'Vintage Rose with Lace Back', src: '../../assets/V505878_S62_SW.jpg' },
                    { title: 'Pastel Blue with Lace Back', alt: 'Pastel Blue with Lace Back', src: '../../assets/V505781_CTQ_SW.jpg' }
                ],
                titleImage: { src: '../../assets/038_F17_BRA_093_JS_070_e5297751.jpg', alt: 'bra' },
                images: [{ src: '../../assets/064_H17_BRA_072_JT_030_e5699631.jpg', alt: 'bra' }, { src: '../../assets/064_H17_BRA_072_JT_030_e5699631.jpg', alt: 'bra' }, { src: '../../assets/064_H17_BRA_072_JT_030_e5699631.jpg', alt: 'bra' }, { src: '../../assets/064_H17_BRA_072_JT_030_e5699631.jpg', alt: 'bra' },],
                rating: 4.3,
                quantity: 1,
                reviews: 283
            },
            {
                id: uuid.v4().substr(0, 8), alt: "bra",
                name: 'Dream Angels Demi Bra',
                description: 'This dreamy demi is even more heavenly, with softer Memory Fit lining that conforms to your curves, a smoothing U-shaped back and stretchier lace sides for a flawless, ultra-comfy fit.',
                categories: ['bras', 'demi'],
                price: 1736.48,
                link: '/bras/demi',
                bandSize: [
                    { title: 32 },
                    { title: 34 },
                    { title: 36, missColors: ['Black with Lace Back'] },
                    { title: 38 },
                    { title: 40, missCupSize: ['b'] }
                ],
                cupSize: [
                    { title: 'a' },
                    { title: 'b' },
                    { title: 'c' },
                    { title: 'd' },
                    { title: 'dd' },
                    { title: 'ddd', missBandSize: [32], missColors: ['Black with Lace Back'] }
                ],
                colors: [
                    { title: 'Black with Lace Back', alt: 'Black with Lace Back', src: '../../assets/V507782_BVJ_SW.jpg' },
                    { title: 'Vintage Rose with Lace Back', alt: 'Vintage Rose with Lace Back', src: '../../assets/V505878_S62_SW.jpg' },
                    { title: 'Pastel Blue with Lace Back', alt: 'Pastel Blue with Lace Back', src: '../../assets/V505781_CTQ_SW.jpg' }
                ],
                titleImage: { src: '../../assets/064_H17_BRA_072_JT_030_e5699631.jpg', alt: 'bra' },
                images: [
                    {
                        src: '../../assets/064_H17_BRA_072_JT_030_e5699631.jpg',
                        alt: 'bra'
                    },
                    {
                        src: '../../assets/064_H17_BRA_072_JT_030_e5699631.jpg',
                        alt: 'bra'
                    },
                    {
                        src: '../../assets/064_H17_BRA_072_JT_030_e5699631.jpg',
                        alt: 'bra'
                    },
                    {
                        src: '../../assets/064_H17_BRA_072_JT_030_e5699631.jpg',
                        alt: 'bra'
                    },
                ],
                rating: 4.3,
                quantity: 1,
                reviews: 240
            },
            {
                id: uuid.v4().substr(0, 8), alt: "bra",
                name: 'Perfect Coverage Bra',
                description: 'Our fullest coverage and our sexiest comfort meet in this supersoft bra with lighter Memory Fit lining that conforms to your curves and a smoothing U-shaped back and sides.',
                categories: ['bras', 'perfect-coverage'],
                price: 1375.29,
                link: '/bras/perfect-coverage',
                bandSize: [
                    { title: 32 },
                    { title: 34 },
                    { title: 36, missColors: ['Black with Lace Back'] },
                    { title: 38 },
                    { title: 40, missCupSize: ['b'] }
                ],
                cupSize: [
                    { title: 'b' },
                    { title: 'c' },
                    { title: 'd' },
                    { title: 'dd' },
                    { title: 'ddd', missBandSize: [32], missColors: ['Black with Lace Back'] }
                ],
                colors: [
                    { title: 'Black with Lace Back', alt: 'Black with Lace Back', src: '../../assets/V507782_BVJ_SW.jpg' },
                    { title: 'Vintage Rose with Lace Back', alt: 'Vintage Rose with Lace Back', src: '../../assets/V505878_S62_SW.jpg' },
                    { title: 'Pastel Blue with Lace Back', alt: 'Pastel Blue with Lace Back', src: '../../assets/V505781_CTQ_SW.jpg' }
                ],
                titleImage: { src: '../../assets/064_H17_BRA_072_JT_030_e5699631.jpg', alt: 'bra' },
                images: [{ src: '../../assets/064_H17_BRA_072_JT_030_e5699631.jpg', alt: 'bra' }, { src: '../../assets/064_H17_BRA_072_JT_030_e5699631.jpg', alt: 'bra' }, { src: '../../assets/064_H17_BRA_072_JT_030_e5699631.jpg', alt: 'bra' }, { src: '../../assets/064_H17_BRA_072_JT_030_e5699631.jpg', alt: 'bra' },],
                rating: 4.4,
                quantity: 1,
                reviews: 845
            },
            {
                id: uuid.v4().substr(0, 8), alt: "bra",
                name: 'Wicked Unlined Uplift Bra',
                description: 'A little lift goes a long way: the push-up without padding in eyelash lace gives a comfy, natural boost thanks to a hidden sling.',
                categories: ['bras', 'balconet'],
                price: 958.53,
                link: '/bras/balconet',
                bandSize: [
                    { title: 32 },
                    { title: 34 },
                    { title: 36, missColors: ['Black with Lace Back'] },
                    { title: 38 },
                ],
                cupSize: [
                    { title: 'a' },
                    { title: 'b' },
                    { title: 'c' },
                    { title: 'd' },
                    { title: 'dd' },
                    { title: 'ddd', missBandSize: [32], missColors: ['Black with Lace Back'] }
                ],
                colors: [
                    { title: 'Black with Lace Back', alt: 'Black with Lace Back', src: '../../assets/V507782_BVJ_SW.jpg' },
                    { title: 'Vintage Rose with Lace Back', alt: 'Vintage Rose with Lace Back', src: '../../assets/V505878_S62_SW.jpg' },
                    { title: 'Pastel Blue with Lace Back', alt: 'Pastel Blue with Lace Back', src: '../../assets/V505781_CTQ_SW.jpg' }
                ],
                titleImage: { src: '../../assets/060_F17_BRA_062_EH_057_e5257238.jpg', alt: 'bra' },
                images: [{ src: '../../assets/064_H17_BRA_072_JT_030_e5699631.jpg', alt: 'bra' }, { src: '../../assets/064_H17_BRA_072_JT_030_e5699631.jpg', alt: 'bra' }, { src: '../../assets/064_H17_BRA_072_JT_030_e5699631.jpg', alt: 'bra' }, { src: '../../assets/064_H17_BRA_072_JT_030_e5699631.jpg', alt: 'bra' },],
                rating: 4.5,
                quantity: 1,
                reviews: 565
            },
            {
                id: uuid.v4().substr(0, 8), alt: "bra",
                name: 'Multi-Way Bra',
                description: 'Five ways to wear it for plenty of style options—in a supersoft fabric with lighter Memory Fit for extra support as it conforms to your curves.',
                categories: ['bras', 'strapless'],
                price: 1541.99,
                link: '/bras/strapless',
                bandSize: [
                    { title: 32 },
                    { title: 34 },
                    { title: 36, missColors: ['Black with Lace Back'] },
                    { title: 38 }
                ],
                cupSize: [
                    { title: 'a' },
                    { title: 'b' },
                    { title: 'c' },
                    { title: 'd' },
                    { title: 'dd' },
                    { title: 'ddd', missBandSize: [32], missColors: ['Black with Lace Back'] }
                ],
                colors: [
                    { title: 'Black with Lace Back', alt: 'Black with Lace Back', src: '../../assets/V507782_BVJ_SW.jpg' },
                    { title: 'Vintage Rose with Lace Back', alt: 'Vintage Rose with Lace Back', src: '../../assets/V505878_S62_SW.jpg' },
                    { title: 'Pastel Blue with Lace Back', alt: 'Pastel Blue with Lace Back', src: '../../assets/V505781_CTQ_SW.jpg' }
                ],
                titleImage: { src: '../../assets/038_F17_BRA_093_JS_070_e5297751.jpg', alt: 'bra' },
                images: [{ src: '../../assets/064_H17_BRA_072_JT_030_e5699631.jpg', alt: 'bra' }, { src: '../../assets/064_H17_BRA_072_JT_030_e5699631.jpg', alt: 'bra' }, { src: '../../assets/064_H17_BRA_072_JT_030_e5699631.jpg', alt: 'bra' }, { src: '../../assets/064_H17_BRA_072_JT_030_e5699631.jpg', alt: 'bra' },],
                rating: 4.3,
                quantity: 1,
                reviews: 283
            },
            {
                id: uuid.v4().substr(0, 8), alt: "bra",
                name: 'Dream Angels Demi Bra',
                description: 'This dreamy demi is even more heavenly, with softer Memory Fit lining that conforms to your curves, a smoothing U-shaped back and stretchier lace sides for a flawless, ultra-comfy fit.',
                categories: ['bras', 'demi'],
                price: 1736.48,
                link: '/bras/demi',
                bandSize: [
                    { title: 32 },
                    { title: 34 },
                    { title: 36, missColors: ['Black with Lace Back'] },
                    { title: 38 },
                    { title: 40, missCupSize: ['b'] }
                ],
                cupSize: [
                    { title: 'a' },
                    { title: 'b' },
                    { title: 'c' },
                    { title: 'd' },
                    { title: 'dd' },
                    { title: 'ddd', missBandSize: [32], missColors: ['Black with Lace Back'] }
                ],
                colors: [
                    { title: 'Black with Lace Back', alt: 'Black with Lace Back', src: '../../assets/V507782_BVJ_SW.jpg' },
                    { title: 'Vintage Rose with Lace Back', alt: 'Vintage Rose with Lace Back', src: '../../assets/V505878_S62_SW.jpg' },
                    { title: 'Pastel Blue with Lace Back', alt: 'Pastel Blue with Lace Back', src: '../../assets/V505781_CTQ_SW.jpg' }
                ],
                titleImage: { src: '../../assets/064_H17_BRA_072_JT_030_e5699631.jpg', alt: 'bra' },
                images: [
                    {
                        src: '../../assets/064_H17_BRA_072_JT_030_e5699631.jpg',
                        alt: 'bra'
                    },
                    {
                        src: '../../assets/064_H17_BRA_072_JT_030_e5699631.jpg',
                        alt: 'bra'
                    },
                    {
                        src: '../../assets/064_H17_BRA_072_JT_030_e5699631.jpg',
                        alt: 'bra'
                    },
                    {
                        src: '../../assets/064_H17_BRA_072_JT_030_e5699631.jpg',
                        alt: 'bra'
                    },
                ],
                rating: 4.3,
                quantity: 1,
                reviews: 240
            },
            {
                id: uuid.v4().substr(0, 8), alt: "bra",
                name: 'Perfect Coverage Bra',
                description: 'Our fullest coverage and our sexiest comfort meet in this supersoft bra with lighter Memory Fit lining that conforms to your curves and a smoothing U-shaped back and sides.',
                categories: ['bras', 'perfect-coverage'],
                price: 1375.29,
                link: '/bras/perfect-coverage',
                bandSize: [
                    { title: 32 },
                    { title: 34 },
                    { title: 36, missColors: ['Black with Lace Back'] },
                    { title: 38 },
                    { title: 40, missCupSize: ['b'] }
                ],
                cupSize: [
                    { title: 'b' },
                    { title: 'c' },
                    { title: 'd' },
                    { title: 'dd' },
                    { title: 'ddd', missBandSize: [32], missColors: ['Black with Lace Back'] }
                ],
                colors: [
                    { title: 'Black with Lace Back', alt: 'Black with Lace Back', src: '../../assets/V507782_BVJ_SW.jpg' },
                    { title: 'Vintage Rose with Lace Back', alt: 'Vintage Rose with Lace Back', src: '../../assets/V505878_S62_SW.jpg' },
                    { title: 'Pastel Blue with Lace Back', alt: 'Pastel Blue with Lace Back', src: '../../assets/V505781_CTQ_SW.jpg' }
                ],
                titleImage: { src: '../../assets/064_H17_BRA_072_JT_030_e5699631.jpg', alt: 'bra' },
                images: [{ src: '../../assets/064_H17_BRA_072_JT_030_e5699631.jpg', alt: 'bra' }, { src: '../../assets/064_H17_BRA_072_JT_030_e5699631.jpg', alt: 'bra' }, { src: '../../assets/064_H17_BRA_072_JT_030_e5699631.jpg', alt: 'bra' }, { src: '../../assets/064_H17_BRA_072_JT_030_e5699631.jpg', alt: 'bra' },],
                rating: 4.4,
                quantity: 1,
                reviews: 845
            },
            {
                id: uuid.v4().substr(0, 8), alt: "bra",
                name: 'Wicked Unlined Uplift Bra',
                description: 'A little lift goes a long way: the push-up without padding in eyelash lace gives a comfy, natural boost thanks to a hidden sling.',
                categories: ['bras', 'balconet'],
                price: 958.53,
                link: '/bras/balconet',
                bandSize: [
                    { title: 32 },
                    { title: 34 },
                    { title: 36, missColors: ['Black with Lace Back'] },
                    { title: 38 },
                ],
                cupSize: [
                    { title: 'a' },
                    { title: 'b' },
                    { title: 'c' },
                    { title: 'd' },
                    { title: 'dd' },
                    { title: 'ddd', missBandSize: [32], missColors: ['Black with Lace Back'] }
                ],
                colors: [
                    { title: 'Black with Lace Back', alt: 'Black with Lace Back', src: '../../assets/V507782_BVJ_SW.jpg' },
                    { title: 'Vintage Rose with Lace Back', alt: 'Vintage Rose with Lace Back', src: '../../assets/V505878_S62_SW.jpg' },
                    { title: 'Pastel Blue with Lace Back', alt: 'Pastel Blue with Lace Back', src: '../../assets/V505781_CTQ_SW.jpg' }
                ],
                titleImage: { src: '../../assets/060_F17_BRA_062_EH_057_e5257238.jpg', alt: 'bra' },
                images: [{ src: '../../assets/064_H17_BRA_072_JT_030_e5699631.jpg', alt: 'bra' }, { src: '../../assets/064_H17_BRA_072_JT_030_e5699631.jpg', alt: 'bra' }, { src: '../../assets/064_H17_BRA_072_JT_030_e5699631.jpg', alt: 'bra' }, { src: '../../assets/064_H17_BRA_072_JT_030_e5699631.jpg', alt: 'bra' },],
                rating: 4.5,
                quantity: 1,
                reviews: 565
            },
            {
                id: uuid.v4().substr(0, 8), alt: "bra",
                name: 'Multi-Way Bra',
                description: 'Five ways to wear it for plenty of style options—in a supersoft fabric with lighter Memory Fit for extra support as it conforms to your curves.',
                categories: ['bras', 'strapless'],
                price: 1541.99,
                link: '/bras/strapless',
                bandSize: [
                    { title: 32 },
                    { title: 34 },
                    { title: 36, missColors: ['Black with Lace Back'] },
                    { title: 38 }
                ],
                cupSize: [
                    { title: 'a' },
                    { title: 'b' },
                    { title: 'c' },
                    { title: 'd' },
                    { title: 'dd' },
                    { title: 'ddd', missBandSize: [32], missColors: ['Black with Lace Back'] }
                ],
                colors: [
                    { title: 'Black with Lace Back', alt: 'Black with Lace Back', src: '../../assets/V507782_BVJ_SW.jpg' },
                    { title: 'Vintage Rose with Lace Back', alt: 'Vintage Rose with Lace Back', src: '../../assets/V505878_S62_SW.jpg' },
                    { title: 'Pastel Blue with Lace Back', alt: 'Pastel Blue with Lace Back', src: '../../assets/V505781_CTQ_SW.jpg' }
                ],
                titleImage: { src: '../../assets/038_F17_BRA_093_JS_070_e5297751.jpg', alt: 'bra' },
                images: [{ src: '../../assets/064_H17_BRA_072_JT_030_e5699631.jpg', alt: 'bra' }, { src: '../../assets/064_H17_BRA_072_JT_030_e5699631.jpg', alt: 'bra' }, { src: '../../assets/064_H17_BRA_072_JT_030_e5699631.jpg', alt: 'bra' }, { src: '../../assets/064_H17_BRA_072_JT_030_e5699631.jpg', alt: 'bra' },],
                rating: 4.3,
                quantity: 1,
                reviews: 283
            }
        ]
    }
}