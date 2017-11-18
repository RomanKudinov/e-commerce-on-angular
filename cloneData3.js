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
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/f8/fe/f8fedc876ef741f489a52c1681118517/V507782_BVJ_SW.jpg", alt: "Black with Lace Back" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/46/50/4650f07345e948a394c77848bfd36ab4/V505878_S62_SW.jpg", alt: "Vintage Rose with Lace Back" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/98/bb/98bb40748f2e44a8abaffbc2d68bb4c2/V505781_CTQ_SW.jpg", alt: "Pastel Blue with Lace Back" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/a2/c9/a2c97fcf4d044cbb84bec282fadfd293/V504802_CQM_SW.jpg", alt: "Gold Shine" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/99/cd/99cda39134af43c6943c687d2dc46c60/V504779_CQN_SW.jpg", alt: "Black Pearl Shine" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/20/4c/204c5ff2d51644c183e5e385012a1d20/V505697_CQP_SW.jpg", alt: "Antique Lavender with Rose Gold Foil" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/93/87/93878a9ac32f4b31b52cbaad8af6cc35/V506988_CYA_SW.jpg", alt: "Pink Ivory with White Gold Foil" },
                    { src: "https://dm.victoriassecret.com/product/swatch/125x125/V859360_DK9.jpg", alt: "Ivory with Silver Foil" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/7b/85/7b85474fcd09489c9b093190699b5ed6/V508246_BVM_SW.jpg", alt: "Black Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/ba/84/ba844794c88946608e895cc9416241d5/V504912_BVN_SW.jpg", alt: "Black Retro Romance Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/24/84/2484f9e80d374592b013f70c00ea1b50/V497025_BPU_SW.jpg", alt: "Kir Retro Romance Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/36/6a/366afd17534e4be599b08ea7d639e3f3/V504636_BWJ_SW.jpg", alt: "Desire with Evening Blush" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/5c/e5/5ce5c79c797e4d8fb3af731f75165223/V504932_CFT_SW.jpg", alt: "Festive Green with Velvet Trim" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/19/2a/192ad085746f417dbde9b308a722d6b8/V504113_CFU_SW.jpg", alt: "Heirloom Lilac with Velvet Trim" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/38/a7/38a7658ce638468bbcd5a473f103eebf/V504149_CFS_SW.jpg", alt: "Coconut White with Velvet Trim" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/8a/68/8a6858911ce14eab85cd11c98244f4fd/V507817_BVK_SW.jpg", alt: "Black Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/e1/6b/e16b87fa38324e9eaadb698635dbb069/V504204_BPV_SW.jpg", alt: "Kir With Retro Romance Lace" },
                    { src: "https://dm.victoriassecret.com/product/swatch/125x125/V878493_DK9.jpg", alt: "White with Shell Pink Crossdye" },
                    { src: "https://dm.victoriassecret.com/product/swatch/125x125/V857308_H28.jpg", alt: "Evening Blush with Pinky Cheeks Crossdye" },
                    { src: "https://dm.victoriassecret.com/product/swatch/125x125/VS_P_SMBOD_BLK_093.jpg", alt: "Black with Metropolis Crossdye" }
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
                quantity: 10,
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
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/4c/d2/4cd2841f1d9b49038347d08a780770cf/V504706_BDX_SW.jpg", alt: "Burnished Lilac Shine" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/37/ec/37ec4248a69d49d583adb0daa45fbcaa/V505523_2C2_SW.jpg", alt: "Winter Lake Shine" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/76/fa/76facd57125e458eac2b13a055d91a44/V505733_CPH_SW.jpg", alt: "Nile Shine" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/9b/4a/9b4a785a845b416e9027354e011420e6/V505854_S62_SW.jpg", alt: "Vintage Rose Shine" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/8c/df/8cdf11974871408fb19afe3572d70a42/V504843_CDS_SW.jpg", alt: "Desire Shine" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/8d/74/8d74333d05144cbf99dd35deca2e2944/V504688_5HR_SW.jpg", alt: "Black Pearl Shine" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/2a/7d/2a7dcc2dc276477bbbda0d9e29be7f77/V504687_204_SW.jpg", alt: "Black Shine" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/ab/48/ab487b9744594885bfb4b131b32184b7/V502262_15G_SW.jpg", alt: "Coconut White Allover Rebel Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/29/45/2945e0d12d8b40d88a84062c4b28655c/V502233_3TW_SW.jpg", alt: "Black Allover Rebel Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/a7/3e/a73e96b4f01f475ea75f7374c2db08b4/V497031_093_SW.jpg", alt: "Black with Rebel Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/65/96/659681e5e727404391d76f20fa3e94e0/V497032_3CA_SW.jpg", alt: "Metropolis with Rebel Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/4d/bd/4dbd30a4e67e41b8aee660877f573368/V497006_BTA_SW.jpg", alt: "Sassafras with Rebel Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/cf/b0/cfb0588a31434b9192e77568e317c49b/V505872_BWJ_SW.jpg", alt: "Desire with Rebel Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/2d/14/2d1429e7859941119ce86f61897ea616/V496974_7V7_SW.jpg", alt: "Dark Iron with Rebel Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/13/a3/13a30141acab445dac623df3841c5ae4/V505667_3DQ_SW.jpg", alt: "Dark and Stormy with Rebel Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/83/2f/832faa75fccd4c548d894c801f4b1895/V504412_BTC_SW.jpg", alt: "Festive Green with Rebel Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/dd/2e/dd2e74ac10e4477b8a79ec4f739c95d8/V498500_BSZ_SW.jpg", alt: "Wood Rose with Rebel Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/da/a3/daa3d612068c4441b6db9bfac893fbcf/V505578_S38_SW.jpg", alt: "Powder Blush with Rebel Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/e2/a1/e2a175d0d35740a2a6f4b07588c08954/V497023_9TX_SW.jpg", alt: "Pink Ivory with Rebel Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/c1/c5/c1c529d16f474fbc951f20dbd286a36c/V497045_9E2_SW.jpg", alt: "Coconut White with Rebel Lace" },
                    { src: "https://dm.victoriassecret.com/product/swatch/125x125/V479635_A56_SW.jpg", alt: "Black Rebel Crochet Lace" },
                    { src: "https://dm.victoriassecret.com/product/swatch/125x125/V480790_68N_SW.jpg", alt: "Angel Pink Rebel Crochet Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/25/d2/25d24c8431bd43e0bf2b189b37f6f604/V500937_4AX_SW.jpg", alt: "Sweet Amaretto with Mesh Trim" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/33/33/3333539c77e94f76b56b8561010e6b62/V501120_BTF_SW.jpg", alt: "Blue Haze with Mesh Trim" },
                    { src: "https://dm.victoriassecret.com/product/swatch/125x125/V870534_DK9.jpg", alt: "White" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/f7/34/f734bb3d7a8445a5889442acff089483/V491073_H38_SW.jpg", alt: "Sheer Pink" },
                    { src: "https://dm.victoriassecret.com/product/swatch/125x125/V480817_M58_SW.jpg", alt: "Champagne" },
                    { src: "https://dm.victoriassecret.com/product/swatch/125x125/V479616_DJ5_SW.jpg", alt: "Almost Nude" },
                    { src: "https://dm.victoriassecret.com/product/swatch/125x125/V479615_B5D_SW.jpg", alt: "Silver Pewter" },
                    { src: "https://dm.victoriassecret.com/product/swatch/125x125/V480816_9CY_SW.jpg", alt: "Rosy Mauve" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/d6/f6/d6f6613aa1774f17b29c1a7e5354d007/V504735_79E_SW.jpg", alt: "Vibrant Red" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/73/5b/735b9bc053094fc5b48575237767f968/V504420_BUF_SW.jpg", alt: "Pink Plum" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/83/42/8342f45b0a42449bb188aa3ddb6eeaa2/V498524_3JT_SW.jpg", alt: "Classic Navy" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/d3/f0/d3f005a864454f068e09761162b0a96b/V499572_BPV_SW.jpg", alt: "Kir" },
                    { src: "https://dm.victoriassecret.com/product/swatch/125x125/V479618_DL3_SW.jpg", alt: "Black" }
                ],
                titleImage: { src: 'https://dm.victoriassecret.com/p/404x539/tif/3c/fd/3cfd07d4dbc24055abae6fe6b1e14ebf/082_H17_BRA_057_EH_105_e5699122.jpg', alt: 'bra' },
                images: [
                    { src: 'https://dm.victoriassecret.com/p/404x539/tif/3c/fd/3cfd07d4dbc24055abae6fe6b1e14ebf/082_H17_BRA_057_EH_105_e5699122.jpg', alt: 'bra' },
                    { src: 'https://dm.victoriassecret.com/p/404x539/tif/85/09/850930c2e06047d9a23ac17e1a75809a/V504843_OM_F.jpg', alt: 'bra' },
                    { src: 'https://dm.victoriassecret.com/p/404x539/tif/94/1f/941f446860604444bee6c7954e37928f/V504843_OM_B.jpg', alt: 'bra' },
                    { src: 'https://dm.victoriassecret.com/p/404x539/tif/9a/1c/9a1cb1c2bc8841baab6f72ca0568c23d/V504843_OF_F.jpg', alt: 'bra' },
                ],
                rating: 4.4,
                quantity: 7,
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
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/7c/65/7c655f5522db415e8322ccc52ee3f6df/V494282_DK9_SW.jpg", alt: "White with Shell Pink Crossdye" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/3f/3d/3f3d782ce11a40ba99aaf3893ffcebbf/V500110_BPU_SW.jpg", alt: "Kir Retro Romance Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/24/67/2467d9057ff24b7ab379e6a3f475d83a/V504699_CQN_SW.jpg", alt: "Black Pearl Shine" },
                    { src: "https://dm.victoriassecret.com/product/swatch/125x125/V857308_H28.jpg", alt: "Evening Blush with Pinky Cheeks Crossdye" },
                    { src: "https://dm.victoriassecret.com/product/swatch/125x125/V847290_DL3.jpg", alt: "Black with Metropolis Crossdye" }
                ],
                titleImage: { src: 'https://dm.victoriassecret.com/p/404x539/tif/6e/a0/6ea0b6063133473db2593c9da6a76c66/060_F17_BRA_062_EH_057_e5257238.jpg', alt: 'bra' },
                images: [
                    { src: 'https://dm.victoriassecret.com/p/404x539/tif/6e/a0/6ea0b6063133473db2593c9da6a76c66/060_F17_BRA_062_EH_057_e5257238.jpg', alt: 'bra' },
                    { src: 'https://dm.victoriassecret.com/p/404x539/tif/56/5a/565a55fab5cd42e9aac4491e0e549fae/V500110_OM_F.jpg', alt: 'bra' },
                    { src: 'https://dm.victoriassecret.com/p/404x539/tif/d9/f2/d9f2caebd2944a3c8d60a943abf45268/V500110_OM_B.jpg', alt: 'bra' },
                    { src: 'https://dm.victoriassecret.com/p/404x539/tif/aa/be/aabe75e9896f44a8a5a51150181da5aa/V500110_OF_F.jpg', alt: 'bra' },
                ],
                rating: 4.5,
                quantity: 9,
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
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/4b/45/4b4549d075e942f4bc8194ce5810c2f3/V501610_BSZ_SW.jpg", alt: "Wood Rose with Rebel Lace" },
                    { src: "https://dm.victoriassecret.com/product/swatch/125x125/V479586_DK9_SW.jpg", alt: "White" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/dc/86/dc867b0af770493284fbf087c5eda248/V496915_9TX_SW.jpg", alt: "Pink Ivory" },
                    { src: "https://dm.victoriassecret.com/product/swatch/125x125/V479585_DJ5_SW.jpg", alt: "Almost Nude" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/dd/60/dd6046b0fb5c42829217be934d7afb83/V505798_S62_SW.jpg", alt: "Vintage Rose" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/60/65/6065eeb3b3964466be6cbfc0e0e8da29/V504684_072_SW.jpg", alt: "Grey Oasis" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/d7/19/d719d97ac9cf487aa16747f567059f5f/V503712_7V7_SW.jpg", alt: "Dark Iron" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/9a/75/9a75058c402c4ec4a2237a186edb2f87/V503686_4AX_SW.jpg", alt: "Sweet Amaretto" },
                    { src: "https://dm.victoriassecret.com/product/swatch/125x125/V479587_DL3_SW.jpg", alt: "Black" }
                ],
                titleImage: { src: 'https://dm.victoriassecret.com/p/404x539/tif/47/1e/471e18449c45442191c56492b92bca35/038_F17_BRA_093_JS_070_e5297751.jpg', alt: 'bra' },
                images: [
                    { src: 'https://dm.victoriassecret.com/p/404x539/tif/47/1e/471e18449c45442191c56492b92bca35/038_F17_BRA_093_JS_070_e5297751.jpg', alt: 'bra' },
                    { src: 'https://dm.victoriassecret.com/p/404x539/tif/44/88/4488c850179b4a30aa0506617f14befd/V496915_OM_F.jpg', alt: 'bra' },
                    { src: 'https://dm.victoriassecret.com/p/404x539/tif/6c/76/6c76e1639bce4a92b005e0df4b126ff5/V496915_OM_B.jpg', alt: 'bra' },
                    { src: 'https://dm.victoriassecret.com/p/404x539/tif/bf/e1/bfe1049c691e45d6903decc5a395ef91/V496915_OF_F.jpg', alt: 'bra' },
                ],
                rating: 4.3,
                quantity: 5,
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
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/f8/fe/f8fedc876ef741f489a52c1681118517/V507782_BVJ_SW.jpg", alt: "Black with Lace Back" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/46/50/4650f07345e948a394c77848bfd36ab4/V505878_S62_SW.jpg", alt: "Vintage Rose with Lace Back" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/98/bb/98bb40748f2e44a8abaffbc2d68bb4c2/V505781_CTQ_SW.jpg", alt: "Pastel Blue with Lace Back" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/a2/c9/a2c97fcf4d044cbb84bec282fadfd293/V504802_CQM_SW.jpg", alt: "Gold Shine" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/99/cd/99cda39134af43c6943c687d2dc46c60/V504779_CQN_SW.jpg", alt: "Black Pearl Shine" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/20/4c/204c5ff2d51644c183e5e385012a1d20/V505697_CQP_SW.jpg", alt: "Antique Lavender with Rose Gold Foil" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/93/87/93878a9ac32f4b31b52cbaad8af6cc35/V506988_CYA_SW.jpg", alt: "Pink Ivory with White Gold Foil" },
                    { src: "https://dm.victoriassecret.com/product/swatch/125x125/V859360_DK9.jpg", alt: "Ivory with Silver Foil" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/7b/85/7b85474fcd09489c9b093190699b5ed6/V508246_BVM_SW.jpg", alt: "Black Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/ba/84/ba844794c88946608e895cc9416241d5/V504912_BVN_SW.jpg", alt: "Black Retro Romance Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/24/84/2484f9e80d374592b013f70c00ea1b50/V497025_BPU_SW.jpg", alt: "Kir Retro Romance Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/36/6a/366afd17534e4be599b08ea7d639e3f3/V504636_BWJ_SW.jpg", alt: "Desire with Evening Blush" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/5c/e5/5ce5c79c797e4d8fb3af731f75165223/V504932_CFT_SW.jpg", alt: "Festive Green with Velvet Trim" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/19/2a/192ad085746f417dbde9b308a722d6b8/V504113_CFU_SW.jpg", alt: "Heirloom Lilac with Velvet Trim" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/38/a7/38a7658ce638468bbcd5a473f103eebf/V504149_CFS_SW.jpg", alt: "Coconut White with Velvet Trim" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/8a/68/8a6858911ce14eab85cd11c98244f4fd/V507817_BVK_SW.jpg", alt: "Black Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/e1/6b/e16b87fa38324e9eaadb698635dbb069/V504204_BPV_SW.jpg", alt: "Kir With Retro Romance Lace" },
                    { src: "https://dm.victoriassecret.com/product/swatch/125x125/V878493_DK9.jpg", alt: "White with Shell Pink Crossdye" },
                    { src: "https://dm.victoriassecret.com/product/swatch/125x125/V857308_H28.jpg", alt: "Evening Blush with Pinky Cheeks Crossdye" },
                    { src: "https://dm.victoriassecret.com/product/swatch/125x125/VS_P_SMBOD_BLK_093.jpg", alt: "Black with Metropolis Crossdye" }
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
                quantity: 10,
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
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/4c/d2/4cd2841f1d9b49038347d08a780770cf/V504706_BDX_SW.jpg", alt: "Burnished Lilac Shine" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/37/ec/37ec4248a69d49d583adb0daa45fbcaa/V505523_2C2_SW.jpg", alt: "Winter Lake Shine" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/76/fa/76facd57125e458eac2b13a055d91a44/V505733_CPH_SW.jpg", alt: "Nile Shine" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/9b/4a/9b4a785a845b416e9027354e011420e6/V505854_S62_SW.jpg", alt: "Vintage Rose Shine" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/8c/df/8cdf11974871408fb19afe3572d70a42/V504843_CDS_SW.jpg", alt: "Desire Shine" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/8d/74/8d74333d05144cbf99dd35deca2e2944/V504688_5HR_SW.jpg", alt: "Black Pearl Shine" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/2a/7d/2a7dcc2dc276477bbbda0d9e29be7f77/V504687_204_SW.jpg", alt: "Black Shine" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/ab/48/ab487b9744594885bfb4b131b32184b7/V502262_15G_SW.jpg", alt: "Coconut White Allover Rebel Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/29/45/2945e0d12d8b40d88a84062c4b28655c/V502233_3TW_SW.jpg", alt: "Black Allover Rebel Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/a7/3e/a73e96b4f01f475ea75f7374c2db08b4/V497031_093_SW.jpg", alt: "Black with Rebel Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/65/96/659681e5e727404391d76f20fa3e94e0/V497032_3CA_SW.jpg", alt: "Metropolis with Rebel Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/4d/bd/4dbd30a4e67e41b8aee660877f573368/V497006_BTA_SW.jpg", alt: "Sassafras with Rebel Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/cf/b0/cfb0588a31434b9192e77568e317c49b/V505872_BWJ_SW.jpg", alt: "Desire with Rebel Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/2d/14/2d1429e7859941119ce86f61897ea616/V496974_7V7_SW.jpg", alt: "Dark Iron with Rebel Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/13/a3/13a30141acab445dac623df3841c5ae4/V505667_3DQ_SW.jpg", alt: "Dark and Stormy with Rebel Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/83/2f/832faa75fccd4c548d894c801f4b1895/V504412_BTC_SW.jpg", alt: "Festive Green with Rebel Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/dd/2e/dd2e74ac10e4477b8a79ec4f739c95d8/V498500_BSZ_SW.jpg", alt: "Wood Rose with Rebel Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/da/a3/daa3d612068c4441b6db9bfac893fbcf/V505578_S38_SW.jpg", alt: "Powder Blush with Rebel Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/e2/a1/e2a175d0d35740a2a6f4b07588c08954/V497023_9TX_SW.jpg", alt: "Pink Ivory with Rebel Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/c1/c5/c1c529d16f474fbc951f20dbd286a36c/V497045_9E2_SW.jpg", alt: "Coconut White with Rebel Lace" },
                    { src: "https://dm.victoriassecret.com/product/swatch/125x125/V479635_A56_SW.jpg", alt: "Black Rebel Crochet Lace" },
                    { src: "https://dm.victoriassecret.com/product/swatch/125x125/V480790_68N_SW.jpg", alt: "Angel Pink Rebel Crochet Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/25/d2/25d24c8431bd43e0bf2b189b37f6f604/V500937_4AX_SW.jpg", alt: "Sweet Amaretto with Mesh Trim" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/33/33/3333539c77e94f76b56b8561010e6b62/V501120_BTF_SW.jpg", alt: "Blue Haze with Mesh Trim" },
                    { src: "https://dm.victoriassecret.com/product/swatch/125x125/V870534_DK9.jpg", alt: "White" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/f7/34/f734bb3d7a8445a5889442acff089483/V491073_H38_SW.jpg", alt: "Sheer Pink" },
                    { src: "https://dm.victoriassecret.com/product/swatch/125x125/V480817_M58_SW.jpg", alt: "Champagne" },
                    { src: "https://dm.victoriassecret.com/product/swatch/125x125/V479616_DJ5_SW.jpg", alt: "Almost Nude" },
                    { src: "https://dm.victoriassecret.com/product/swatch/125x125/V479615_B5D_SW.jpg", alt: "Silver Pewter" },
                    { src: "https://dm.victoriassecret.com/product/swatch/125x125/V480816_9CY_SW.jpg", alt: "Rosy Mauve" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/d6/f6/d6f6613aa1774f17b29c1a7e5354d007/V504735_79E_SW.jpg", alt: "Vibrant Red" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/73/5b/735b9bc053094fc5b48575237767f968/V504420_BUF_SW.jpg", alt: "Pink Plum" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/83/42/8342f45b0a42449bb188aa3ddb6eeaa2/V498524_3JT_SW.jpg", alt: "Classic Navy" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/d3/f0/d3f005a864454f068e09761162b0a96b/V499572_BPV_SW.jpg", alt: "Kir" },
                    { src: "https://dm.victoriassecret.com/product/swatch/125x125/V479618_DL3_SW.jpg", alt: "Black" }
                ],
                titleImage: { src: 'https://dm.victoriassecret.com/p/404x539/tif/3c/fd/3cfd07d4dbc24055abae6fe6b1e14ebf/082_H17_BRA_057_EH_105_e5699122.jpg', alt: 'bra' },
                images: [
                    { src: 'https://dm.victoriassecret.com/p/404x539/tif/3c/fd/3cfd07d4dbc24055abae6fe6b1e14ebf/082_H17_BRA_057_EH_105_e5699122.jpg', alt: 'bra' },
                    { src: 'https://dm.victoriassecret.com/p/404x539/tif/85/09/850930c2e06047d9a23ac17e1a75809a/V504843_OM_F.jpg', alt: 'bra' },
                    { src: 'https://dm.victoriassecret.com/p/404x539/tif/94/1f/941f446860604444bee6c7954e37928f/V504843_OM_B.jpg', alt: 'bra' },
                    { src: 'https://dm.victoriassecret.com/p/404x539/tif/9a/1c/9a1cb1c2bc8841baab6f72ca0568c23d/V504843_OF_F.jpg', alt: 'bra' },
                ],
                rating: 4.4,
                quantity: 7,
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
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/7c/65/7c655f5522db415e8322ccc52ee3f6df/V494282_DK9_SW.jpg", alt: "White with Shell Pink Crossdye" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/3f/3d/3f3d782ce11a40ba99aaf3893ffcebbf/V500110_BPU_SW.jpg", alt: "Kir Retro Romance Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/24/67/2467d9057ff24b7ab379e6a3f475d83a/V504699_CQN_SW.jpg", alt: "Black Pearl Shine" },
                    { src: "https://dm.victoriassecret.com/product/swatch/125x125/V857308_H28.jpg", alt: "Evening Blush with Pinky Cheeks Crossdye" },
                    { src: "https://dm.victoriassecret.com/product/swatch/125x125/V847290_DL3.jpg", alt: "Black with Metropolis Crossdye" }
                ],
                titleImage: { src: 'https://dm.victoriassecret.com/p/404x539/tif/6e/a0/6ea0b6063133473db2593c9da6a76c66/060_F17_BRA_062_EH_057_e5257238.jpg', alt: 'bra' },
                images: [
                    { src: 'https://dm.victoriassecret.com/p/404x539/tif/6e/a0/6ea0b6063133473db2593c9da6a76c66/060_F17_BRA_062_EH_057_e5257238.jpg', alt: 'bra' },
                    { src: 'https://dm.victoriassecret.com/p/404x539/tif/56/5a/565a55fab5cd42e9aac4491e0e549fae/V500110_OM_F.jpg', alt: 'bra' },
                    { src: 'https://dm.victoriassecret.com/p/404x539/tif/d9/f2/d9f2caebd2944a3c8d60a943abf45268/V500110_OM_B.jpg', alt: 'bra' },
                    { src: 'https://dm.victoriassecret.com/p/404x539/tif/aa/be/aabe75e9896f44a8a5a51150181da5aa/V500110_OF_F.jpg', alt: 'bra' },
                ],
                rating: 4.5,
                quantity: 9,
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
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/4b/45/4b4549d075e942f4bc8194ce5810c2f3/V501610_BSZ_SW.jpg", alt: "Wood Rose with Rebel Lace" },
                    { src: "https://dm.victoriassecret.com/product/swatch/125x125/V479586_DK9_SW.jpg", alt: "White" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/dc/86/dc867b0af770493284fbf087c5eda248/V496915_9TX_SW.jpg", alt: "Pink Ivory" },
                    { src: "https://dm.victoriassecret.com/product/swatch/125x125/V479585_DJ5_SW.jpg", alt: "Almost Nude" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/dd/60/dd6046b0fb5c42829217be934d7afb83/V505798_S62_SW.jpg", alt: "Vintage Rose" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/60/65/6065eeb3b3964466be6cbfc0e0e8da29/V504684_072_SW.jpg", alt: "Grey Oasis" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/d7/19/d719d97ac9cf487aa16747f567059f5f/V503712_7V7_SW.jpg", alt: "Dark Iron" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/9a/75/9a75058c402c4ec4a2237a186edb2f87/V503686_4AX_SW.jpg", alt: "Sweet Amaretto" },
                    { src: "https://dm.victoriassecret.com/product/swatch/125x125/V479587_DL3_SW.jpg", alt: "Black" }
                ],
                titleImage: { src: 'https://dm.victoriassecret.com/p/404x539/tif/47/1e/471e18449c45442191c56492b92bca35/038_F17_BRA_093_JS_070_e5297751.jpg', alt: 'bra' },
                images: [
                    { src: 'https://dm.victoriassecret.com/p/404x539/tif/47/1e/471e18449c45442191c56492b92bca35/038_F17_BRA_093_JS_070_e5297751.jpg', alt: 'bra' },
                    { src: 'https://dm.victoriassecret.com/p/404x539/tif/44/88/4488c850179b4a30aa0506617f14befd/V496915_OM_F.jpg', alt: 'bra' },
                    { src: 'https://dm.victoriassecret.com/p/404x539/tif/6c/76/6c76e1639bce4a92b005e0df4b126ff5/V496915_OM_B.jpg', alt: 'bra' },
                    { src: 'https://dm.victoriassecret.com/p/404x539/tif/bf/e1/bfe1049c691e45d6903decc5a395ef91/V496915_OF_F.jpg', alt: 'bra' },
                ],
                rating: 4.3,
                quantity: 5,
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
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/f8/fe/f8fedc876ef741f489a52c1681118517/V507782_BVJ_SW.jpg", alt: "Black with Lace Back" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/46/50/4650f07345e948a394c77848bfd36ab4/V505878_S62_SW.jpg", alt: "Vintage Rose with Lace Back" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/98/bb/98bb40748f2e44a8abaffbc2d68bb4c2/V505781_CTQ_SW.jpg", alt: "Pastel Blue with Lace Back" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/a2/c9/a2c97fcf4d044cbb84bec282fadfd293/V504802_CQM_SW.jpg", alt: "Gold Shine" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/99/cd/99cda39134af43c6943c687d2dc46c60/V504779_CQN_SW.jpg", alt: "Black Pearl Shine" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/20/4c/204c5ff2d51644c183e5e385012a1d20/V505697_CQP_SW.jpg", alt: "Antique Lavender with Rose Gold Foil" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/93/87/93878a9ac32f4b31b52cbaad8af6cc35/V506988_CYA_SW.jpg", alt: "Pink Ivory with White Gold Foil" },
                    { src: "https://dm.victoriassecret.com/product/swatch/125x125/V859360_DK9.jpg", alt: "Ivory with Silver Foil" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/7b/85/7b85474fcd09489c9b093190699b5ed6/V508246_BVM_SW.jpg", alt: "Black Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/ba/84/ba844794c88946608e895cc9416241d5/V504912_BVN_SW.jpg", alt: "Black Retro Romance Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/24/84/2484f9e80d374592b013f70c00ea1b50/V497025_BPU_SW.jpg", alt: "Kir Retro Romance Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/36/6a/366afd17534e4be599b08ea7d639e3f3/V504636_BWJ_SW.jpg", alt: "Desire with Evening Blush" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/5c/e5/5ce5c79c797e4d8fb3af731f75165223/V504932_CFT_SW.jpg", alt: "Festive Green with Velvet Trim" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/19/2a/192ad085746f417dbde9b308a722d6b8/V504113_CFU_SW.jpg", alt: "Heirloom Lilac with Velvet Trim" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/38/a7/38a7658ce638468bbcd5a473f103eebf/V504149_CFS_SW.jpg", alt: "Coconut White with Velvet Trim" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/8a/68/8a6858911ce14eab85cd11c98244f4fd/V507817_BVK_SW.jpg", alt: "Black Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/e1/6b/e16b87fa38324e9eaadb698635dbb069/V504204_BPV_SW.jpg", alt: "Kir With Retro Romance Lace" },
                    { src: "https://dm.victoriassecret.com/product/swatch/125x125/V878493_DK9.jpg", alt: "White with Shell Pink Crossdye" },
                    { src: "https://dm.victoriassecret.com/product/swatch/125x125/V857308_H28.jpg", alt: "Evening Blush with Pinky Cheeks Crossdye" },
                    { src: "https://dm.victoriassecret.com/product/swatch/125x125/VS_P_SMBOD_BLK_093.jpg", alt: "Black with Metropolis Crossdye" }
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
                quantity: 10,
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
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/4c/d2/4cd2841f1d9b49038347d08a780770cf/V504706_BDX_SW.jpg", alt: "Burnished Lilac Shine" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/37/ec/37ec4248a69d49d583adb0daa45fbcaa/V505523_2C2_SW.jpg", alt: "Winter Lake Shine" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/76/fa/76facd57125e458eac2b13a055d91a44/V505733_CPH_SW.jpg", alt: "Nile Shine" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/9b/4a/9b4a785a845b416e9027354e011420e6/V505854_S62_SW.jpg", alt: "Vintage Rose Shine" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/8c/df/8cdf11974871408fb19afe3572d70a42/V504843_CDS_SW.jpg", alt: "Desire Shine" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/8d/74/8d74333d05144cbf99dd35deca2e2944/V504688_5HR_SW.jpg", alt: "Black Pearl Shine" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/2a/7d/2a7dcc2dc276477bbbda0d9e29be7f77/V504687_204_SW.jpg", alt: "Black Shine" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/ab/48/ab487b9744594885bfb4b131b32184b7/V502262_15G_SW.jpg", alt: "Coconut White Allover Rebel Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/29/45/2945e0d12d8b40d88a84062c4b28655c/V502233_3TW_SW.jpg", alt: "Black Allover Rebel Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/a7/3e/a73e96b4f01f475ea75f7374c2db08b4/V497031_093_SW.jpg", alt: "Black with Rebel Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/65/96/659681e5e727404391d76f20fa3e94e0/V497032_3CA_SW.jpg", alt: "Metropolis with Rebel Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/4d/bd/4dbd30a4e67e41b8aee660877f573368/V497006_BTA_SW.jpg", alt: "Sassafras with Rebel Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/cf/b0/cfb0588a31434b9192e77568e317c49b/V505872_BWJ_SW.jpg", alt: "Desire with Rebel Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/2d/14/2d1429e7859941119ce86f61897ea616/V496974_7V7_SW.jpg", alt: "Dark Iron with Rebel Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/13/a3/13a30141acab445dac623df3841c5ae4/V505667_3DQ_SW.jpg", alt: "Dark and Stormy with Rebel Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/83/2f/832faa75fccd4c548d894c801f4b1895/V504412_BTC_SW.jpg", alt: "Festive Green with Rebel Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/dd/2e/dd2e74ac10e4477b8a79ec4f739c95d8/V498500_BSZ_SW.jpg", alt: "Wood Rose with Rebel Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/da/a3/daa3d612068c4441b6db9bfac893fbcf/V505578_S38_SW.jpg", alt: "Powder Blush with Rebel Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/e2/a1/e2a175d0d35740a2a6f4b07588c08954/V497023_9TX_SW.jpg", alt: "Pink Ivory with Rebel Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/c1/c5/c1c529d16f474fbc951f20dbd286a36c/V497045_9E2_SW.jpg", alt: "Coconut White with Rebel Lace" },
                    { src: "https://dm.victoriassecret.com/product/swatch/125x125/V479635_A56_SW.jpg", alt: "Black Rebel Crochet Lace" },
                    { src: "https://dm.victoriassecret.com/product/swatch/125x125/V480790_68N_SW.jpg", alt: "Angel Pink Rebel Crochet Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/25/d2/25d24c8431bd43e0bf2b189b37f6f604/V500937_4AX_SW.jpg", alt: "Sweet Amaretto with Mesh Trim" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/33/33/3333539c77e94f76b56b8561010e6b62/V501120_BTF_SW.jpg", alt: "Blue Haze with Mesh Trim" },
                    { src: "https://dm.victoriassecret.com/product/swatch/125x125/V870534_DK9.jpg", alt: "White" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/f7/34/f734bb3d7a8445a5889442acff089483/V491073_H38_SW.jpg", alt: "Sheer Pink" },
                    { src: "https://dm.victoriassecret.com/product/swatch/125x125/V480817_M58_SW.jpg", alt: "Champagne" },
                    { src: "https://dm.victoriassecret.com/product/swatch/125x125/V479616_DJ5_SW.jpg", alt: "Almost Nude" },
                    { src: "https://dm.victoriassecret.com/product/swatch/125x125/V479615_B5D_SW.jpg", alt: "Silver Pewter" },
                    { src: "https://dm.victoriassecret.com/product/swatch/125x125/V480816_9CY_SW.jpg", alt: "Rosy Mauve" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/d6/f6/d6f6613aa1774f17b29c1a7e5354d007/V504735_79E_SW.jpg", alt: "Vibrant Red" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/73/5b/735b9bc053094fc5b48575237767f968/V504420_BUF_SW.jpg", alt: "Pink Plum" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/83/42/8342f45b0a42449bb188aa3ddb6eeaa2/V498524_3JT_SW.jpg", alt: "Classic Navy" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/d3/f0/d3f005a864454f068e09761162b0a96b/V499572_BPV_SW.jpg", alt: "Kir" },
                    { src: "https://dm.victoriassecret.com/product/swatch/125x125/V479618_DL3_SW.jpg", alt: "Black" }
                ],
                titleImage: { src: 'https://dm.victoriassecret.com/p/404x539/tif/3c/fd/3cfd07d4dbc24055abae6fe6b1e14ebf/082_H17_BRA_057_EH_105_e5699122.jpg', alt: 'bra' },
                images: [
                    { src: 'https://dm.victoriassecret.com/p/404x539/tif/3c/fd/3cfd07d4dbc24055abae6fe6b1e14ebf/082_H17_BRA_057_EH_105_e5699122.jpg', alt: 'bra' },
                    { src: 'https://dm.victoriassecret.com/p/404x539/tif/85/09/850930c2e06047d9a23ac17e1a75809a/V504843_OM_F.jpg', alt: 'bra' },
                    { src: 'https://dm.victoriassecret.com/p/404x539/tif/94/1f/941f446860604444bee6c7954e37928f/V504843_OM_B.jpg', alt: 'bra' },
                    { src: 'https://dm.victoriassecret.com/p/404x539/tif/9a/1c/9a1cb1c2bc8841baab6f72ca0568c23d/V504843_OF_F.jpg', alt: 'bra' },
                ],
                rating: 4.4,
                quantity: 7,
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
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/7c/65/7c655f5522db415e8322ccc52ee3f6df/V494282_DK9_SW.jpg", alt: "White with Shell Pink Crossdye" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/3f/3d/3f3d782ce11a40ba99aaf3893ffcebbf/V500110_BPU_SW.jpg", alt: "Kir Retro Romance Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/24/67/2467d9057ff24b7ab379e6a3f475d83a/V504699_CQN_SW.jpg", alt: "Black Pearl Shine" },
                    { src: "https://dm.victoriassecret.com/product/swatch/125x125/V857308_H28.jpg", alt: "Evening Blush with Pinky Cheeks Crossdye" },
                    { src: "https://dm.victoriassecret.com/product/swatch/125x125/V847290_DL3.jpg", alt: "Black with Metropolis Crossdye" }
                ],
                titleImage: { src: 'https://dm.victoriassecret.com/p/404x539/tif/6e/a0/6ea0b6063133473db2593c9da6a76c66/060_F17_BRA_062_EH_057_e5257238.jpg', alt: 'bra' },
                images: [
                    { src: 'https://dm.victoriassecret.com/p/404x539/tif/6e/a0/6ea0b6063133473db2593c9da6a76c66/060_F17_BRA_062_EH_057_e5257238.jpg', alt: 'bra' },
                    { src: 'https://dm.victoriassecret.com/p/404x539/tif/56/5a/565a55fab5cd42e9aac4491e0e549fae/V500110_OM_F.jpg', alt: 'bra' },
                    { src: 'https://dm.victoriassecret.com/p/404x539/tif/d9/f2/d9f2caebd2944a3c8d60a943abf45268/V500110_OM_B.jpg', alt: 'bra' },
                    { src: 'https://dm.victoriassecret.com/p/404x539/tif/aa/be/aabe75e9896f44a8a5a51150181da5aa/V500110_OF_F.jpg', alt: 'bra' },
                ],
                rating: 4.5,
                quantity: 9,
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
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/4b/45/4b4549d075e942f4bc8194ce5810c2f3/V501610_BSZ_SW.jpg", alt: "Wood Rose with Rebel Lace" },
                    { src: "https://dm.victoriassecret.com/product/swatch/125x125/V479586_DK9_SW.jpg", alt: "White" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/dc/86/dc867b0af770493284fbf087c5eda248/V496915_9TX_SW.jpg", alt: "Pink Ivory" },
                    { src: "https://dm.victoriassecret.com/product/swatch/125x125/V479585_DJ5_SW.jpg", alt: "Almost Nude" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/dd/60/dd6046b0fb5c42829217be934d7afb83/V505798_S62_SW.jpg", alt: "Vintage Rose" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/60/65/6065eeb3b3964466be6cbfc0e0e8da29/V504684_072_SW.jpg", alt: "Grey Oasis" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/d7/19/d719d97ac9cf487aa16747f567059f5f/V503712_7V7_SW.jpg", alt: "Dark Iron" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/9a/75/9a75058c402c4ec4a2237a186edb2f87/V503686_4AX_SW.jpg", alt: "Sweet Amaretto" },
                    { src: "https://dm.victoriassecret.com/product/swatch/125x125/V479587_DL3_SW.jpg", alt: "Black" }
                ],
                titleImage: { src: 'https://dm.victoriassecret.com/p/404x539/tif/47/1e/471e18449c45442191c56492b92bca35/038_F17_BRA_093_JS_070_e5297751.jpg', alt: 'bra' },
                images: [
                    { src: 'https://dm.victoriassecret.com/p/404x539/tif/47/1e/471e18449c45442191c56492b92bca35/038_F17_BRA_093_JS_070_e5297751.jpg', alt: 'bra' },
                    { src: 'https://dm.victoriassecret.com/p/404x539/tif/44/88/4488c850179b4a30aa0506617f14befd/V496915_OM_F.jpg', alt: 'bra' },
                    { src: 'https://dm.victoriassecret.com/p/404x539/tif/6c/76/6c76e1639bce4a92b005e0df4b126ff5/V496915_OM_B.jpg', alt: 'bra' },
                    { src: 'https://dm.victoriassecret.com/p/404x539/tif/bf/e1/bfe1049c691e45d6903decc5a395ef91/V496915_OF_F.jpg', alt: 'bra' },
                ],
                rating: 4.3,
                quantity: 5,
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
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/f8/fe/f8fedc876ef741f489a52c1681118517/V507782_BVJ_SW.jpg", alt: "Black with Lace Back" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/46/50/4650f07345e948a394c77848bfd36ab4/V505878_S62_SW.jpg", alt: "Vintage Rose with Lace Back" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/98/bb/98bb40748f2e44a8abaffbc2d68bb4c2/V505781_CTQ_SW.jpg", alt: "Pastel Blue with Lace Back" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/a2/c9/a2c97fcf4d044cbb84bec282fadfd293/V504802_CQM_SW.jpg", alt: "Gold Shine" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/99/cd/99cda39134af43c6943c687d2dc46c60/V504779_CQN_SW.jpg", alt: "Black Pearl Shine" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/20/4c/204c5ff2d51644c183e5e385012a1d20/V505697_CQP_SW.jpg", alt: "Antique Lavender with Rose Gold Foil" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/93/87/93878a9ac32f4b31b52cbaad8af6cc35/V506988_CYA_SW.jpg", alt: "Pink Ivory with White Gold Foil" },
                    { src: "https://dm.victoriassecret.com/product/swatch/125x125/V859360_DK9.jpg", alt: "Ivory with Silver Foil" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/7b/85/7b85474fcd09489c9b093190699b5ed6/V508246_BVM_SW.jpg", alt: "Black Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/ba/84/ba844794c88946608e895cc9416241d5/V504912_BVN_SW.jpg", alt: "Black Retro Romance Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/24/84/2484f9e80d374592b013f70c00ea1b50/V497025_BPU_SW.jpg", alt: "Kir Retro Romance Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/36/6a/366afd17534e4be599b08ea7d639e3f3/V504636_BWJ_SW.jpg", alt: "Desire with Evening Blush" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/5c/e5/5ce5c79c797e4d8fb3af731f75165223/V504932_CFT_SW.jpg", alt: "Festive Green with Velvet Trim" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/19/2a/192ad085746f417dbde9b308a722d6b8/V504113_CFU_SW.jpg", alt: "Heirloom Lilac with Velvet Trim" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/38/a7/38a7658ce638468bbcd5a473f103eebf/V504149_CFS_SW.jpg", alt: "Coconut White with Velvet Trim" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/8a/68/8a6858911ce14eab85cd11c98244f4fd/V507817_BVK_SW.jpg", alt: "Black Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/e1/6b/e16b87fa38324e9eaadb698635dbb069/V504204_BPV_SW.jpg", alt: "Kir With Retro Romance Lace" },
                    { src: "https://dm.victoriassecret.com/product/swatch/125x125/V878493_DK9.jpg", alt: "White with Shell Pink Crossdye" },
                    { src: "https://dm.victoriassecret.com/product/swatch/125x125/V857308_H28.jpg", alt: "Evening Blush with Pinky Cheeks Crossdye" },
                    { src: "https://dm.victoriassecret.com/product/swatch/125x125/VS_P_SMBOD_BLK_093.jpg", alt: "Black with Metropolis Crossdye" }
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
                quantity: 10,
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
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/4c/d2/4cd2841f1d9b49038347d08a780770cf/V504706_BDX_SW.jpg", alt: "Burnished Lilac Shine" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/37/ec/37ec4248a69d49d583adb0daa45fbcaa/V505523_2C2_SW.jpg", alt: "Winter Lake Shine" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/76/fa/76facd57125e458eac2b13a055d91a44/V505733_CPH_SW.jpg", alt: "Nile Shine" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/9b/4a/9b4a785a845b416e9027354e011420e6/V505854_S62_SW.jpg", alt: "Vintage Rose Shine" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/8c/df/8cdf11974871408fb19afe3572d70a42/V504843_CDS_SW.jpg", alt: "Desire Shine" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/8d/74/8d74333d05144cbf99dd35deca2e2944/V504688_5HR_SW.jpg", alt: "Black Pearl Shine" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/2a/7d/2a7dcc2dc276477bbbda0d9e29be7f77/V504687_204_SW.jpg", alt: "Black Shine" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/ab/48/ab487b9744594885bfb4b131b32184b7/V502262_15G_SW.jpg", alt: "Coconut White Allover Rebel Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/29/45/2945e0d12d8b40d88a84062c4b28655c/V502233_3TW_SW.jpg", alt: "Black Allover Rebel Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/a7/3e/a73e96b4f01f475ea75f7374c2db08b4/V497031_093_SW.jpg", alt: "Black with Rebel Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/65/96/659681e5e727404391d76f20fa3e94e0/V497032_3CA_SW.jpg", alt: "Metropolis with Rebel Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/4d/bd/4dbd30a4e67e41b8aee660877f573368/V497006_BTA_SW.jpg", alt: "Sassafras with Rebel Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/cf/b0/cfb0588a31434b9192e77568e317c49b/V505872_BWJ_SW.jpg", alt: "Desire with Rebel Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/2d/14/2d1429e7859941119ce86f61897ea616/V496974_7V7_SW.jpg", alt: "Dark Iron with Rebel Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/13/a3/13a30141acab445dac623df3841c5ae4/V505667_3DQ_SW.jpg", alt: "Dark and Stormy with Rebel Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/83/2f/832faa75fccd4c548d894c801f4b1895/V504412_BTC_SW.jpg", alt: "Festive Green with Rebel Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/dd/2e/dd2e74ac10e4477b8a79ec4f739c95d8/V498500_BSZ_SW.jpg", alt: "Wood Rose with Rebel Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/da/a3/daa3d612068c4441b6db9bfac893fbcf/V505578_S38_SW.jpg", alt: "Powder Blush with Rebel Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/e2/a1/e2a175d0d35740a2a6f4b07588c08954/V497023_9TX_SW.jpg", alt: "Pink Ivory with Rebel Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/c1/c5/c1c529d16f474fbc951f20dbd286a36c/V497045_9E2_SW.jpg", alt: "Coconut White with Rebel Lace" },
                    { src: "https://dm.victoriassecret.com/product/swatch/125x125/V479635_A56_SW.jpg", alt: "Black Rebel Crochet Lace" },
                    { src: "https://dm.victoriassecret.com/product/swatch/125x125/V480790_68N_SW.jpg", alt: "Angel Pink Rebel Crochet Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/25/d2/25d24c8431bd43e0bf2b189b37f6f604/V500937_4AX_SW.jpg", alt: "Sweet Amaretto with Mesh Trim" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/33/33/3333539c77e94f76b56b8561010e6b62/V501120_BTF_SW.jpg", alt: "Blue Haze with Mesh Trim" },
                    { src: "https://dm.victoriassecret.com/product/swatch/125x125/V870534_DK9.jpg", alt: "White" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/f7/34/f734bb3d7a8445a5889442acff089483/V491073_H38_SW.jpg", alt: "Sheer Pink" },
                    { src: "https://dm.victoriassecret.com/product/swatch/125x125/V480817_M58_SW.jpg", alt: "Champagne" },
                    { src: "https://dm.victoriassecret.com/product/swatch/125x125/V479616_DJ5_SW.jpg", alt: "Almost Nude" },
                    { src: "https://dm.victoriassecret.com/product/swatch/125x125/V479615_B5D_SW.jpg", alt: "Silver Pewter" },
                    { src: "https://dm.victoriassecret.com/product/swatch/125x125/V480816_9CY_SW.jpg", alt: "Rosy Mauve" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/d6/f6/d6f6613aa1774f17b29c1a7e5354d007/V504735_79E_SW.jpg", alt: "Vibrant Red" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/73/5b/735b9bc053094fc5b48575237767f968/V504420_BUF_SW.jpg", alt: "Pink Plum" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/83/42/8342f45b0a42449bb188aa3ddb6eeaa2/V498524_3JT_SW.jpg", alt: "Classic Navy" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/d3/f0/d3f005a864454f068e09761162b0a96b/V499572_BPV_SW.jpg", alt: "Kir" },
                    { src: "https://dm.victoriassecret.com/product/swatch/125x125/V479618_DL3_SW.jpg", alt: "Black" }
                ],
                titleImage: { src: 'https://dm.victoriassecret.com/p/404x539/tif/3c/fd/3cfd07d4dbc24055abae6fe6b1e14ebf/082_H17_BRA_057_EH_105_e5699122.jpg', alt: 'bra' },
                images: [
                    { src: 'https://dm.victoriassecret.com/p/404x539/tif/3c/fd/3cfd07d4dbc24055abae6fe6b1e14ebf/082_H17_BRA_057_EH_105_e5699122.jpg', alt: 'bra' },
                    { src: 'https://dm.victoriassecret.com/p/404x539/tif/85/09/850930c2e06047d9a23ac17e1a75809a/V504843_OM_F.jpg', alt: 'bra' },
                    { src: 'https://dm.victoriassecret.com/p/404x539/tif/94/1f/941f446860604444bee6c7954e37928f/V504843_OM_B.jpg', alt: 'bra' },
                    { src: 'https://dm.victoriassecret.com/p/404x539/tif/9a/1c/9a1cb1c2bc8841baab6f72ca0568c23d/V504843_OF_F.jpg', alt: 'bra' },
                ],
                rating: 4.4,
                quantity: 9,
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
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/7c/65/7c655f5522db415e8322ccc52ee3f6df/V494282_DK9_SW.jpg", alt: "White with Shell Pink Crossdye" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/3f/3d/3f3d782ce11a40ba99aaf3893ffcebbf/V500110_BPU_SW.jpg", alt: "Kir Retro Romance Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/24/67/2467d9057ff24b7ab379e6a3f475d83a/V504699_CQN_SW.jpg", alt: "Black Pearl Shine" },
                    { src: "https://dm.victoriassecret.com/product/swatch/125x125/V857308_H28.jpg", alt: "Evening Blush with Pinky Cheeks Crossdye" },
                    { src: "https://dm.victoriassecret.com/product/swatch/125x125/V847290_DL3.jpg", alt: "Black with Metropolis Crossdye" }
                ],
                titleImage: { src: 'https://dm.victoriassecret.com/p/404x539/tif/6e/a0/6ea0b6063133473db2593c9da6a76c66/060_F17_BRA_062_EH_057_e5257238.jpg', alt: 'bra' },
                images: [
                    { src: 'https://dm.victoriassecret.com/p/404x539/tif/6e/a0/6ea0b6063133473db2593c9da6a76c66/060_F17_BRA_062_EH_057_e5257238.jpg', alt: 'bra' },
                    { src: 'https://dm.victoriassecret.com/p/404x539/tif/56/5a/565a55fab5cd42e9aac4491e0e549fae/V500110_OM_F.jpg', alt: 'bra' },
                    { src: 'https://dm.victoriassecret.com/p/404x539/tif/d9/f2/d9f2caebd2944a3c8d60a943abf45268/V500110_OM_B.jpg', alt: 'bra' },
                    { src: 'https://dm.victoriassecret.com/p/404x539/tif/aa/be/aabe75e9896f44a8a5a51150181da5aa/V500110_OF_F.jpg', alt: 'bra' },
                ],
                rating: 4.5,
                quantity: 7,
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
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/4b/45/4b4549d075e942f4bc8194ce5810c2f3/V501610_BSZ_SW.jpg", alt: "Wood Rose with Rebel Lace" },
                    { src: "https://dm.victoriassecret.com/product/swatch/125x125/V479586_DK9_SW.jpg", alt: "White" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/dc/86/dc867b0af770493284fbf087c5eda248/V496915_9TX_SW.jpg", alt: "Pink Ivory" },
                    { src: "https://dm.victoriassecret.com/product/swatch/125x125/V479585_DJ5_SW.jpg", alt: "Almost Nude" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/dd/60/dd6046b0fb5c42829217be934d7afb83/V505798_S62_SW.jpg", alt: "Vintage Rose" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/60/65/6065eeb3b3964466be6cbfc0e0e8da29/V504684_072_SW.jpg", alt: "Grey Oasis" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/d7/19/d719d97ac9cf487aa16747f567059f5f/V503712_7V7_SW.jpg", alt: "Dark Iron" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/9a/75/9a75058c402c4ec4a2237a186edb2f87/V503686_4AX_SW.jpg", alt: "Sweet Amaretto" },
                    { src: "https://dm.victoriassecret.com/product/swatch/125x125/V479587_DL3_SW.jpg", alt: "Black" }
                ],
                titleImage: { src: 'https://dm.victoriassecret.com/p/404x539/tif/47/1e/471e18449c45442191c56492b92bca35/038_F17_BRA_093_JS_070_e5297751.jpg', alt: 'bra' },
                images: [
                    { src: 'https://dm.victoriassecret.com/p/404x539/tif/47/1e/471e18449c45442191c56492b92bca35/038_F17_BRA_093_JS_070_e5297751.jpg', alt: 'bra' },
                    { src: 'https://dm.victoriassecret.com/p/404x539/tif/44/88/4488c850179b4a30aa0506617f14befd/V496915_OM_F.jpg', alt: 'bra' },
                    { src: 'https://dm.victoriassecret.com/p/404x539/tif/6c/76/6c76e1639bce4a92b005e0df4b126ff5/V496915_OM_B.jpg', alt: 'bra' },
                    { src: 'https://dm.victoriassecret.com/p/404x539/tif/bf/e1/bfe1049c691e45d6903decc5a395ef91/V496915_OF_F.jpg', alt: 'bra' },
                ],
                rating: 4.3,
                quantity: 14,
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
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/f8/fe/f8fedc876ef741f489a52c1681118517/V507782_BVJ_SW.jpg", alt: "Black with Lace Back" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/46/50/4650f07345e948a394c77848bfd36ab4/V505878_S62_SW.jpg", alt: "Vintage Rose with Lace Back" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/98/bb/98bb40748f2e44a8abaffbc2d68bb4c2/V505781_CTQ_SW.jpg", alt: "Pastel Blue with Lace Back" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/a2/c9/a2c97fcf4d044cbb84bec282fadfd293/V504802_CQM_SW.jpg", alt: "Gold Shine" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/99/cd/99cda39134af43c6943c687d2dc46c60/V504779_CQN_SW.jpg", alt: "Black Pearl Shine" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/20/4c/204c5ff2d51644c183e5e385012a1d20/V505697_CQP_SW.jpg", alt: "Antique Lavender with Rose Gold Foil" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/93/87/93878a9ac32f4b31b52cbaad8af6cc35/V506988_CYA_SW.jpg", alt: "Pink Ivory with White Gold Foil" },
                    { src: "https://dm.victoriassecret.com/product/swatch/125x125/V859360_DK9.jpg", alt: "Ivory with Silver Foil" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/7b/85/7b85474fcd09489c9b093190699b5ed6/V508246_BVM_SW.jpg", alt: "Black Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/ba/84/ba844794c88946608e895cc9416241d5/V504912_BVN_SW.jpg", alt: "Black Retro Romance Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/24/84/2484f9e80d374592b013f70c00ea1b50/V497025_BPU_SW.jpg", alt: "Kir Retro Romance Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/36/6a/366afd17534e4be599b08ea7d639e3f3/V504636_BWJ_SW.jpg", alt: "Desire with Evening Blush" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/5c/e5/5ce5c79c797e4d8fb3af731f75165223/V504932_CFT_SW.jpg", alt: "Festive Green with Velvet Trim" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/19/2a/192ad085746f417dbde9b308a722d6b8/V504113_CFU_SW.jpg", alt: "Heirloom Lilac with Velvet Trim" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/38/a7/38a7658ce638468bbcd5a473f103eebf/V504149_CFS_SW.jpg", alt: "Coconut White with Velvet Trim" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/8a/68/8a6858911ce14eab85cd11c98244f4fd/V507817_BVK_SW.jpg", alt: "Black Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/e1/6b/e16b87fa38324e9eaadb698635dbb069/V504204_BPV_SW.jpg", alt: "Kir With Retro Romance Lace" },
                    { src: "https://dm.victoriassecret.com/product/swatch/125x125/V878493_DK9.jpg", alt: "White with Shell Pink Crossdye" },
                    { src: "https://dm.victoriassecret.com/product/swatch/125x125/V857308_H28.jpg", alt: "Evening Blush with Pinky Cheeks Crossdye" },
                    { src: "https://dm.victoriassecret.com/product/swatch/125x125/VS_P_SMBOD_BLK_093.jpg", alt: "Black with Metropolis Crossdye" }
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
                quantity: 6,
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
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/4c/d2/4cd2841f1d9b49038347d08a780770cf/V504706_BDX_SW.jpg", alt: "Burnished Lilac Shine" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/37/ec/37ec4248a69d49d583adb0daa45fbcaa/V505523_2C2_SW.jpg", alt: "Winter Lake Shine" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/76/fa/76facd57125e458eac2b13a055d91a44/V505733_CPH_SW.jpg", alt: "Nile Shine" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/9b/4a/9b4a785a845b416e9027354e011420e6/V505854_S62_SW.jpg", alt: "Vintage Rose Shine" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/8c/df/8cdf11974871408fb19afe3572d70a42/V504843_CDS_SW.jpg", alt: "Desire Shine" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/8d/74/8d74333d05144cbf99dd35deca2e2944/V504688_5HR_SW.jpg", alt: "Black Pearl Shine" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/2a/7d/2a7dcc2dc276477bbbda0d9e29be7f77/V504687_204_SW.jpg", alt: "Black Shine" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/ab/48/ab487b9744594885bfb4b131b32184b7/V502262_15G_SW.jpg", alt: "Coconut White Allover Rebel Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/29/45/2945e0d12d8b40d88a84062c4b28655c/V502233_3TW_SW.jpg", alt: "Black Allover Rebel Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/a7/3e/a73e96b4f01f475ea75f7374c2db08b4/V497031_093_SW.jpg", alt: "Black with Rebel Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/65/96/659681e5e727404391d76f20fa3e94e0/V497032_3CA_SW.jpg", alt: "Metropolis with Rebel Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/4d/bd/4dbd30a4e67e41b8aee660877f573368/V497006_BTA_SW.jpg", alt: "Sassafras with Rebel Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/cf/b0/cfb0588a31434b9192e77568e317c49b/V505872_BWJ_SW.jpg", alt: "Desire with Rebel Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/2d/14/2d1429e7859941119ce86f61897ea616/V496974_7V7_SW.jpg", alt: "Dark Iron with Rebel Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/13/a3/13a30141acab445dac623df3841c5ae4/V505667_3DQ_SW.jpg", alt: "Dark and Stormy with Rebel Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/83/2f/832faa75fccd4c548d894c801f4b1895/V504412_BTC_SW.jpg", alt: "Festive Green with Rebel Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/dd/2e/dd2e74ac10e4477b8a79ec4f739c95d8/V498500_BSZ_SW.jpg", alt: "Wood Rose with Rebel Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/da/a3/daa3d612068c4441b6db9bfac893fbcf/V505578_S38_SW.jpg", alt: "Powder Blush with Rebel Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/e2/a1/e2a175d0d35740a2a6f4b07588c08954/V497023_9TX_SW.jpg", alt: "Pink Ivory with Rebel Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/c1/c5/c1c529d16f474fbc951f20dbd286a36c/V497045_9E2_SW.jpg", alt: "Coconut White with Rebel Lace" },
                    { src: "https://dm.victoriassecret.com/product/swatch/125x125/V479635_A56_SW.jpg", alt: "Black Rebel Crochet Lace" },
                    { src: "https://dm.victoriassecret.com/product/swatch/125x125/V480790_68N_SW.jpg", alt: "Angel Pink Rebel Crochet Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/25/d2/25d24c8431bd43e0bf2b189b37f6f604/V500937_4AX_SW.jpg", alt: "Sweet Amaretto with Mesh Trim" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/33/33/3333539c77e94f76b56b8561010e6b62/V501120_BTF_SW.jpg", alt: "Blue Haze with Mesh Trim" },
                    { src: "https://dm.victoriassecret.com/product/swatch/125x125/V870534_DK9.jpg", alt: "White" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/f7/34/f734bb3d7a8445a5889442acff089483/V491073_H38_SW.jpg", alt: "Sheer Pink" },
                    { src: "https://dm.victoriassecret.com/product/swatch/125x125/V480817_M58_SW.jpg", alt: "Champagne" },
                    { src: "https://dm.victoriassecret.com/product/swatch/125x125/V479616_DJ5_SW.jpg", alt: "Almost Nude" },
                    { src: "https://dm.victoriassecret.com/product/swatch/125x125/V479615_B5D_SW.jpg", alt: "Silver Pewter" },
                    { src: "https://dm.victoriassecret.com/product/swatch/125x125/V480816_9CY_SW.jpg", alt: "Rosy Mauve" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/d6/f6/d6f6613aa1774f17b29c1a7e5354d007/V504735_79E_SW.jpg", alt: "Vibrant Red" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/73/5b/735b9bc053094fc5b48575237767f968/V504420_BUF_SW.jpg", alt: "Pink Plum" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/83/42/8342f45b0a42449bb188aa3ddb6eeaa2/V498524_3JT_SW.jpg", alt: "Classic Navy" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/d3/f0/d3f005a864454f068e09761162b0a96b/V499572_BPV_SW.jpg", alt: "Kir" },
                    { src: "https://dm.victoriassecret.com/product/swatch/125x125/V479618_DL3_SW.jpg", alt: "Black" }
                ],
                titleImage: { src: 'https://dm.victoriassecret.com/p/404x539/tif/3c/fd/3cfd07d4dbc24055abae6fe6b1e14ebf/082_H17_BRA_057_EH_105_e5699122.jpg', alt: 'bra' },
                images: [
                    { src: 'https://dm.victoriassecret.com/p/404x539/tif/3c/fd/3cfd07d4dbc24055abae6fe6b1e14ebf/082_H17_BRA_057_EH_105_e5699122.jpg', alt: 'bra' },
                    { src: 'https://dm.victoriassecret.com/p/404x539/tif/85/09/850930c2e06047d9a23ac17e1a75809a/V504843_OM_F.jpg', alt: 'bra' },
                    { src: 'https://dm.victoriassecret.com/p/404x539/tif/94/1f/941f446860604444bee6c7954e37928f/V504843_OM_B.jpg', alt: 'bra' },
                    { src: 'https://dm.victoriassecret.com/p/404x539/tif/9a/1c/9a1cb1c2bc8841baab6f72ca0568c23d/V504843_OF_F.jpg', alt: 'bra' },
                ],
                rating: 4.4,
                quantity: 13,
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
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/7c/65/7c655f5522db415e8322ccc52ee3f6df/V494282_DK9_SW.jpg", alt: "White with Shell Pink Crossdye" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/3f/3d/3f3d782ce11a40ba99aaf3893ffcebbf/V500110_BPU_SW.jpg", alt: "Kir Retro Romance Lace" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/24/67/2467d9057ff24b7ab379e6a3f475d83a/V504699_CQN_SW.jpg", alt: "Black Pearl Shine" },
                    { src: "https://dm.victoriassecret.com/product/swatch/125x125/V857308_H28.jpg", alt: "Evening Blush with Pinky Cheeks Crossdye" },
                    { src: "https://dm.victoriassecret.com/product/swatch/125x125/V847290_DL3.jpg", alt: "Black with Metropolis Crossdye" }
                ],
                titleImage: { src: 'https://dm.victoriassecret.com/p/404x539/tif/6e/a0/6ea0b6063133473db2593c9da6a76c66/060_F17_BRA_062_EH_057_e5257238.jpg', alt: 'bra' },
                images: [
                    { src: 'https://dm.victoriassecret.com/p/404x539/tif/6e/a0/6ea0b6063133473db2593c9da6a76c66/060_F17_BRA_062_EH_057_e5257238.jpg', alt: 'bra' },
                    { src: 'https://dm.victoriassecret.com/p/404x539/tif/56/5a/565a55fab5cd42e9aac4491e0e549fae/V500110_OM_F.jpg', alt: 'bra' },
                    { src: 'https://dm.victoriassecret.com/p/404x539/tif/d9/f2/d9f2caebd2944a3c8d60a943abf45268/V500110_OM_B.jpg', alt: 'bra' },
                    { src: 'https://dm.victoriassecret.com/p/404x539/tif/aa/be/aabe75e9896f44a8a5a51150181da5aa/V500110_OF_F.jpg', alt: 'bra' },
                ],
                rating: 4.5,
                quantity: 20,
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
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/4b/45/4b4549d075e942f4bc8194ce5810c2f3/V501610_BSZ_SW.jpg", alt: "Wood Rose with Rebel Lace" },
                    { src: "https://dm.victoriassecret.com/product/swatch/125x125/V479586_DK9_SW.jpg", alt: "White" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/dc/86/dc867b0af770493284fbf087c5eda248/V496915_9TX_SW.jpg", alt: "Pink Ivory" },
                    { src: "https://dm.victoriassecret.com/product/swatch/125x125/V479585_DJ5_SW.jpg", alt: "Almost Nude" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/dd/60/dd6046b0fb5c42829217be934d7afb83/V505798_S62_SW.jpg", alt: "Vintage Rose" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/60/65/6065eeb3b3964466be6cbfc0e0e8da29/V504684_072_SW.jpg", alt: "Grey Oasis" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/d7/19/d719d97ac9cf487aa16747f567059f5f/V503712_7V7_SW.jpg", alt: "Dark Iron" },
                    { src: "https://dm.victoriassecret.com/p/s/125x125/tif/9a/75/9a75058c402c4ec4a2237a186edb2f87/V503686_4AX_SW.jpg", alt: "Sweet Amaretto" },
                    { src: "https://dm.victoriassecret.com/product/swatch/125x125/V479587_DL3_SW.jpg", alt: "Black" }
                ],
                titleImage: { src: 'https://dm.victoriassecret.com/p/404x539/tif/47/1e/471e18449c45442191c56492b92bca35/038_F17_BRA_093_JS_070_e5297751.jpg', alt: 'bra' },
                images: [
                    { src: 'https://dm.victoriassecret.com/p/404x539/tif/47/1e/471e18449c45442191c56492b92bca35/038_F17_BRA_093_JS_070_e5297751.jpg', alt: 'bra' },
                    { src: 'https://dm.victoriassecret.com/p/404x539/tif/44/88/4488c850179b4a30aa0506617f14befd/V496915_OM_F.jpg', alt: 'bra' },
                    { src: 'https://dm.victoriassecret.com/p/404x539/tif/6c/76/6c76e1639bce4a92b005e0df4b126ff5/V496915_OM_B.jpg', alt: 'bra' },
                    { src: 'https://dm.victoriassecret.com/p/404x539/tif/bf/e1/bfe1049c691e45d6903decc5a395ef91/V496915_OF_F.jpg', alt: 'bra' },
                ],
                rating: 4.3,
                quantity: 15,
                reviews: 283
            },
        ]
    }
}