
document.addEventListener('DOMContentLoaded', () => { 
const quizData = [
    {
        subheading: 'Well Air Concept Mock Questions',
        questions: [
            {
                question: 'What is the primary objective of the Air Concept in the WELL Building Standard?',
                choices: [
                    'To maximize energy efficiency in HVAC systems',
                    'To optimize indoor air quality and minimize sources of indoor air pollution',
                    'To increase outdoor air ventilation rates',
                    'To reduce carbon emissions from buildings'
                ],
                correctAnswer: 'To optimize indoor air quality and minimize sources of indoor air pollution'
            },
            {
question: 'Which of the following strategies can be used to control the levels of volatile organic compounds (VOCs) in a WELL-certified building?',
choices: [
'Installing low-VOC emitting materials and products',
'Increasing outdoor air ventilation rates',
'Implementing a regular cleaning and maintenance schedule',
'All of the above'
],
correctAnswer: 'All of the above'
},
{
question: 'According to the WELL Building Standard, what is the maximum allowable concentration of PM2.5 particles in the indoor air?',
choices: [
'15 µg/m³',
'12 µg/m³',
'10 µg/m³',
'5 µg/m³'
],
correctAnswer: '10 µg/m³'
},

{
question: 'In the context of the WELL Building Standard, what is the primary purpose of the air filtration system?',
choices: [
'To reduce energy consumption in the building',
'To maintain a comfortable indoor temperature',
'To remove particulate matter, allergens, and other airborne contaminants',
'To control humidity levels in the building'
],
correctAnswer: 'To remove particulate matter, allergens, and other airborne contaminants'
},

{
question: 'Which of the following strategies can help reduce the risk of mold growth and maintain healthy humidity levels in a WELL-certified building?',
choices: [
'Regular inspection and maintenance of HVAC systems',
'Implementing moisture control measures in building design and construction',
'Monitoring and maintaining indoor relative humidity levels between 30% and 50%',
'All of the above'
],
correctAnswer: 'All of the above'
},
{
question: 'What is the purpose of the Ventilation Effectiveness Feature in the WELL Building Standard?',
choices: [
'To maximize energy efficiency in HVAC systems',
'To ensure the proper distribution of fresh air throughout the building',
'To increase outdoor air ventilation rates',
'To reduce carbon emissions from buildings'
],
correctAnswer: 'To ensure the proper distribution of fresh air throughout the building'
},

{
question: 'Which of the following indoor air contaminants can be controlled by using proper filtration systems?',
choices: [
'Particulate matter (PM)',
'Volatile organic compounds (VOCs)',
'Carbon dioxide (CO2)',
'All of the above'
],
correctAnswer: 'All of the above'
},

{
question: 'Which of the following is NOT a strategy for reducing radon levels in a WELL-certified building?',
choices: [
'Sealing foundation cracks and openings',
'Installing a radon mitigation system',
'Increasing outdoor air ventilation rates',
'Using air purifiers with HEPA filters'
],
correctAnswer: 'Using air purifiers with HEPA filters'
},

{
question: 'What is the primary benefit of providing outdoor air delivery monitoring in a WELL-certified building?',
choices: [
'To ensure the buildings air quality is continuously maintained',
'To minimize energy consumption in the building',
'To maintain a comfortable indoor temperature',
'To control humidity levels in the building'
],
correctAnswer: 'To ensure the buildings air quality is continuously maintained'
},

{
question: 'Which of the following strategies can be employed to reduce exposure to environmental tobacco smoke (ETS) in a WELL-certified building?',
choices: [
'Implementing a no-smoking policy within the building and near its entrances',
'Designating separate outdoor smoking areas away from building entrances and air intakes',
'Using proper air filtration systems',
'All of the above'
],
correctAnswer: 'All of the above'
}
            // ... other questions for Set 1
        ]
    },
    {
        subheading: 'Well Water Concept Mock Questions',
        questions: [
            {
                question: 'What is the primary objective of the Water Concept in the WELL Building Standard?',
                choices: [
                    'To optimize water consumption in buildings',
                    'To improve the taste of drinking water',
                    'To ensure the provision of clean, safe, and potable water',
                    'To reduce water pollution from buildings'
                ],
                correctAnswer: 'To ensure the provision of clean, safe, and potable water'
            },
            {
question: 'Which of the following water quality parameters is NOT monitored under the WELL Building Standard?',
choices: [
'Turbidity',
'Lead',
'Dissolved oxygen',
'Total dissolved solids (TDS)'
],
correctAnswer: 'Dissolved oxygen'
},

{
question: 'According to the WELL Building Standard, what is the maximum allowable concentration of lead in drinking water?',
choices: [
'15 µg/L',
'5 µg/L',
'10 µg/L',
'20 µg/L'
],
correctAnswer: '5 µg/L'
},

{
question: 'Which of the following strategies can be used to reduce the risk of Legionella bacteria growth in a buildings water system?',
choices: [
'Regular flushing of water systems',
'Maintaining appropriate water temperatures',
'Implementing a water management plan',
'All of the above'
],
correctAnswer: 'All of the above'
},

{
question: 'In the context of the WELL Building Standard, what is the purpose of the Fundamental Water Quality Feature?',
choices: [
'To minimize water consumption in the building',
'To ensure that the buildings water meets or exceeds minimum water quality standards',
'To encourage the use of water-saving technologies and fixtures',
'To reduce water waste from building processes'
],
correctAnswer: 'To ensure that the buildings water meets or exceeds minimum water quality standards'
},
{
question: 'Which of the following is a primary goal of the Water Treatment Feature in the WELL Building Standard?',
choices: [
'To improve the taste of drinking water',
'To ensure that the buildings water meets or exceeds minimum water quality standards',
'To encourage the use of water-saving technologies and fixtures',
'To reduce water waste from building processes'
],
correctAnswer: 'To ensure that the buildings water meets or exceeds minimum water quality standards'
},

{
question: 'Which of the following strategies can be used to improve water efficiency in a WELL-certified building?',
choices: [
'Installing water-efficient fixtures and appliances',
'Implementing a water-efficient landscaping strategy',
'Capturing and reusing rainwater or greywater',
'All of the above'
],
correctAnswer: 'All of the above'
},

{
question: 'What is the primary purpose of providing drinking water promotion in the WELL Building Standard?',
choices: [
'To improve the taste of drinking water',
'To encourage occupants to consume more water and stay hydrated',
'To minimize water consumption in the building',
'To reduce water waste from building processes'
],
correctAnswer: 'To encourage occupants to consume more water and stay hydrated'
},

{
question: 'Which of the following is NOT a benefit of using point-of-use water filters in a WELL-certified building?',
choices: [
'Reducing contaminants in drinking water',
'Improving the taste of drinking water',
'Increasing the water pressure in the building',
'Providing an additional layer of protection against waterborne contaminants'
],
correctAnswer: 'Increasing the water pressure in the building'
},

{
question: 'In the context of the WELL Building Standard, how can hot water temperature be managed to reduce the risk of scalding while still minimizing the risk of Legionella bacteria growth?',
choices: [
'Maintaining a minimum hot water temperature of 140°F (60°C)',
'Installing thermostatic mixing valves at points of use',
'Implementing a regular flushing schedule for hot water systems',
'Increasing the water pressure in the building'
],
correctAnswer: 'Installing thermostatic mixing valves at points of use'
}





            // ... other questions for Set 2
        ]
    },
    {
        subheading: 'Nourishment',
        questions: [
            {
question: 'What is the primary objective of the Nourishment Concept in the WELL Building Standard?',
choices: [
'To promote healthy eating habits among building occupants',
'To minimize the environmental impact of food production',
'To reduce food waste in the building',
'To optimize water and energy use in food preparation'
],
correctAnswer: 'To promote healthy eating habits among building occupants'
},

{
question: 'Which of the following is a strategy for promoting fruit and vegetable consumption in a WELL-certified building?',
choices: [
'Providing at least two types of fruits and two types of vegetables daily',
'Offering a salad bar in the building cafeteria',
'Displaying fruits and vegetables prominently in food service areas',
'All of the above'
],
correctAnswer: 'All of the above'
},

{
question: 'What is the purpose of the Nutritional Transparency Feature in the WELL Building Standard?',
choices: [
'To ensure the buildings water meets or exceeds minimum water quality standards',
'To promote healthy eating habits among building occupants',
'To provide clear and accurate nutritional information for all food items served',
'To reduce the environmental impact of food production'
],
correctAnswer: 'To provide clear and accurate nutritional information for all food items served'
},

{
question: 'In the context of the WELL Building Standard, which of the following strategies can help reduce unhealthy food options and promote healthier choices?',
choices: [
'Limiting the availability of sugar-sweetened beverages',
'Offering smaller portion sizes for high-calorie food items',
'Pricing healthier food options more attractively',
'All of the above'
],
correctAnswer: 'All of the above'
},

{
question: 'Which of the following strategies can be used to promote mindful eating in a WELL-certified building?',
choices: [
'Designating quiet and relaxing eating spaces',
'Providing a variety of seating options in dining areas',
'Offering nutrition education and information resources',
'All of the above'
],
correctAnswer: 'All of the above'
},

{
question: 'According to the WELL Building Standard, what is the primary purpose of incorporating food allergies and preferences into food offerings?',
choices: [
'To reduce food waste in the building',
'To accommodate the dietary needs and preferences of building occupants',
'To minimize the environmental impact of food production',
'To optimize water and energy use in food preparation'
],
correctAnswer: 'To accommodate the dietary needs and preferences of building occupants'
},

{
question: 'What is the purpose of the Hand Washing Feature in the WELL Building Standard?',
choices: [
'To promote healthy eating habits among building occupants',
'To ensure the buildings water meets or exceeds minimum water quality standards',
'To minimize the risk of foodborne illnesses by encouraging proper hand hygiene',
'To reduce the environmental impact of food production'
],
correctAnswer: 'To minimize the risk of foodborne illnesses by encouraging proper hand hygiene'
},

{
question: 'Which of the following is a strategy for supporting local and sustainable food production in a WELL-certified building?',
choices: [
'Sourcing food from local farmers and producers',
'Offering organic and sustainably-produced food options',
'Implementing a food waste reduction program',
'All of the above'
],
correctAnswer: 'All of the above'
},
{
question: 'In the context of the WELL Building Standard, which of the following strategies can help minimize the risk of foodborne illnesses in a building?',
choices: [
'Proper food storage and temperature control',
'Regular cleaning and sanitation of food preparation areas',
'Training food service staff on safe food handling practices',
'All of the above'
],
correctAnswer: 'All of the above'
},

{
question: 'Which of the following is a strategy for promoting healthy beverages in a WELL-certified building?',
choices: [
'Providing access to free, clean drinking water',
'Offering a variety of unsweetened beverages',
'Limiting the availability of sugar-sweetened beverages',
'All of the above'
],
correctAnswer: 'All of the above'
}

            // ... other questions for Set 3
        ]
    },
    {
        subheading: 'Light',
        questions: [
   {
question: 'What is the primary objective of the Light Concept in the WELL Building Standard?',
choices: [
'To minimize energy consumption from lighting systems',
'To enhance visual comfort and promote productivity among building occupants',
'To ensure adequate daylight exposure for building occupants',
'To prevent glare and reduce visual strain'
],
correctAnswer: 'To enhance visual comfort and promote productivity among building occupants'
},

{
question: 'Which of the following is a strategy for optimizing daylight exposure in a WELL-certified building?',
choices: [
'Designing the building with large windows and open floor plans',
'Using light shelves to distribute daylight more evenly',
'Incorporating daylight-responsive lighting controls',
'All of the above'
],
correctAnswer: 'All of the above'
},

{
question: 'In the context of the WELL Building Standard, what is the primary purpose of providing proper task lighting in workspaces?',
choices: [
'To minimize energy consumption from lighting systems',
'To ensure adequate daylight exposure for building occupants',
'To provide appropriate light levels for specific tasks, reducing visual strain',
'To prevent glare and reduce visual strain'
],
correctAnswer: 'To provide appropriate light levels for specific tasks, reducing visual strain'
},

{
question: 'Which of the following strategies can help reduce glare in a WELL-certified building?',
choices: [
'Using window shading devices and blinds',
'Incorporating indirect lighting solutions',
'Employing matte surfaces and finishes',
'All of the above'
],
correctAnswer: 'All of the above'
},

{
question: 'What is the primary purpose of the Circadian Lighting Design Feature in the WELL Building Standard?',
choices: [
'To minimize energy consumption from lighting systems',
'To enhance visual comfort and promote productivity among building occupants',
'To support the human circadian system by providing appropriate light exposure throughout the day',
'To ensure adequate daylight exposure for building occupants'
],
correctAnswer: 'To support the human circadian system by providing appropriate light exposure throughout the day'
},

{
question: 'Which of the following is a strategy for minimizing light pollution from a WELL-certified building?',
choices: [
'Installing exterior lighting fixtures with full cut-off shields',
'Using motion sensors and timers for exterior lighting',
'Employing low-glare, energy-efficient lighting sources',
'All of the above'
],
correctAnswer: 'All of the above'
},

{
question: 'What is the purpose of the Electric Light Glare Control Feature in the WELL Building Standard?',
choices: [
'To minimize energy consumption from lighting systems',
'To enhance visual comfort and promote productivity among building occupants',
'To prevent glare and reduce visual strain',
'To ensure adequate daylight exposure for building occupants'
],
correctAnswer: 'To prevent glare and reduce visual strain'
},

{
question: 'Which of the following strategies can be used to improve color quality in a WELL-certified building?',
choices: [
'Selecting lighting sources with a high color rendering index (CRI)',
'Using lighting sources with an appropriate correlated color temperature (CCT)',
'Incorporating daylight-responsive lighting controls',
'Both A and B'
],
correctAnswer: 'Both A and B'
},
{
question: 'What is the primary purpose of providing adequate illuminance levels in a WELL-certified building?',
choices: [
'To minimize energy consumption from lighting systems',
'To ensure adequate daylight exposure for building occupants',
'To create a visually comfortable environment and reduce the risk of visual strain',
'To prevent glare and reduce visual strain'
],
correctAnswer: 'To create a visually comfortable environment and reduce the risk of visual strain'
},

{
question: 'Which of the following factors should be considered when designing a lighting system for a WELL-certified building?',
choices: [
'Illuminance levels',
'Color quality',
'Glare control',
'All of the above'
],
correctAnswer: 'All of the above'
}
            // ... other questions for Set 3
        ]
    },
    {
        subheading: 'Movement',
        questions: [
            {
question: 'What is the primary objective of the Movement Concept in the WELL Building Standard?',
choices: [
'To encourage physical activity and reduce sedentary behavior among building occupants',
'To ensure proper air circulation within the building',
'To promote efficient transportation options',
'To provide safe and accessible emergency exits'
],
correctAnswer: 'To encourage physical activity and reduce sedentary behavior among building occupants'
},

{
question: 'Which of the following strategies can promote physical activity in a WELL-certified building?',
choices: [
'Providing easily accessible and appealing staircases',
'Designing active workstations, such as standing desks or treadmill desks',
'Offering fitness facilities or exercise classes on-site',
'All of the above'
],
correctAnswer: 'All of the above'
},

{
question: 'What is the purpose of the Active Transportation Feature in the WELL Building Standard?',
choices: [
'To encourage physical activity and reduce sedentary behavior among building occupants',
'To promote efficient transportation options and reduce reliance on personal vehicles',
'To provide safe and accessible emergency exits',
'To minimize energy consumption from transportation systems'
],
correctAnswer: 'To promote efficient transportation options and reduce reliance on personal vehicles'
},

{
question: 'Which of the following strategies can help reduce sedentary behavior in a WELL-certified building?',
choices: [
'Designing spaces for walking meetings',
'Providing regular breaks for stretching and movement during work hours',
'Encouraging the use of stairs instead of elevators',
'All of the above'
],
correctAnswer: 'All of the above'
},

{
question: 'What is the primary purpose of the Accessible Design Feature in the WELL Building Standard?',
choices: [
'To ensure that all building occupants, including those with disabilities, can access and use the building comfortably and safely',
'To minimize energy consumption from transportation systems',
'To encourage physical activity and reduce sedentary behavior among building occupants',
'To provide safe and accessible emergency exits'
],
correctAnswer: 'To ensure that all building occupants, including those with disabilities, can access and use the building comfortably and safely'
},

{
question: 'Which of the following strategies can be used to promote ergonomic comfort in a WELL-certified building?',
choices: [
'Providing adjustable furniture, such as chairs and desks',
'Offering ergonomics training and resources to building occupants',
'Conducting regular ergonomic assessments and adjustments',
'All of the above'
],
correctAnswer: 'All of the above'
},

{
question: 'In the context of the WELL Building Standard, what is the primary purpose of providing adequate bicycle storage and facilities?',
choices: [
'To encourage physical activity and reduce sedentary behavior among building occupants',
'To promote efficient transportation options and reduce reliance on personal vehicles',
'To provide safe and accessible emergency exits',
'To minimize energy consumption from transportation systems'
],
correctAnswer: 'To promote efficient transportation options and reduce reliance on personal vehicles'
},

{
question: 'Which of the following is a strategy for promoting physical activity through exterior spaces in a WELL-certified building?',
choices: [
'Designing walking paths and outdoor exercise areas',
'Providing outdoor seating areas and amenities',
'Incorporating green spaces and natural elements',
'All of the above'
],
correctAnswer: 'All of the above'
},
{
question: 'What is the primary purpose of the Emergency Preparedness Feature in the WELL Building Standard?',
choices: [
'To ensure proper air circulation within the building',
'To provide safe and accessible emergency exits and procedures for building occupants',
'To encourage physical activity and reduce sedentary behavior among building occupants',
'To minimize energy consumption from transportation systems'
],
correctAnswer: 'To provide safe and accessible emergency exits and procedures for building occupants'
},

{
question: 'Which of the following is a strategy for promoting occupant well-being through physical movement in a WELL-certified building?',
choices: [
'Providing clear and visible signage to promote stair use',
'Designing spaces with ample natural light and views of the outdoors',
'Incorporating sound-absorbing materials to reduce noise levels',
'All of the above'
],
correctAnswer: 'Providing clear and visible signage to promote stair use'
}
 
            // ... other questions for Set 1
        ]
    },
    {
        subheading: 'Thermal Comfort and Sound',
        questions: [
            {
question: 'What is the primary objective of the Thermal Comfort Concept in the WELL Building Standard?',
choices: [
'To minimize energy consumption from heating and cooling systems',
'To maintain a comfortable indoor temperature range for building occupants',
'To reduce outdoor noise pollution',
'To promote natural ventilation and airflow'
],
correctAnswer: 'To maintain a comfortable indoor temperature range for building occupants'
},

{
question: 'Which of the following factors can affect thermal comfort in a building?',
choices: [
'Temperature',
'Humidity',
'Air velocity',
'All of the above'
],
correctAnswer: 'All of the above'
},

{
question: 'What is the purpose of the Thermal Comfort Monitoring Feature in the WELL Building Standard?',
choices: [
'To minimize energy consumption from heating and cooling systems',
'To ensure that indoor temperature remains within the acceptable range for occupant comfort',
'To reduce outdoor noise pollution',
'To promote natural ventilation and airflow'
],
correctAnswer: 'To ensure that indoor temperature remains within the acceptable range for occupant comfort'
},

{
question: 'Which of the following strategies can help improve thermal comfort in a WELL-certified building?',
choices: [
'Proper insulation and sealing to minimize heat loss or gain',
'Use of energy-efficient heating, ventilation, and air conditioning (HVAC) systems',
'Offering individual thermal controls for occupants',
'All of the above'
],
correctAnswer: 'All of the above'
},

{
question: 'What is the primary purpose of the Sound Concept in the WELL Building Standard?',
choices: [
'To minimize energy consumption from sound-producing equipment',
'To create a pleasant acoustic environment and reduce noise disturbances for building occupants',
'To provide privacy and minimize sound transmission between spaces',
'To promote natural ventilation and airflow'
],
correctAnswer: 'To create a pleasant acoustic environment and reduce noise disturbances for building occupants'
},

{
question: 'Which of the following factors can contribute to noise pollution in a building?',
choices: [
'External sources such as traffic or construction',
'Internal sources such as HVAC systems or equipment',
'Occupant activities and conversations',
'All of the above'
],
correctAnswer: 'All of the above'
},

{
question: 'What is the purpose of the Sound Measurement and Control Feature in the WELL Building Standard?',
choices: [
'To minimize energy consumption from sound-producing equipment',
'To ensure that indoor sound levels remain within acceptable limits for occupant comfort',
'To reduce outdoor noise pollution',
'To promote natural ventilation and airflow'
],
correctAnswer: 'To ensure that indoor sound levels remain within acceptable limits for occupant comfort'
},

{
question: 'Which of the following strategies can help mitigate noise disturbances in a WELL-certified building?',
choices: [
'Proper acoustic design and soundproofing materials',
'Use of noise-reducing fixtures and equipment',
'Establishing quiet zones or designated noise-free areas',
'All of the above'
],
correctAnswer: 'All of the above'
},

{
question: 'What is the purpose of the Acoustic Comfort Enhancement Feature in the WELL Building Standard?',
choices: [
'To minimize energy consumption from sound-producing equipment',
'To create a pleasant acoustic environment and reduce noise disturbances for building occupants',
'To provide privacy and minimize sound transmission between spaces',
'To ensure that indoor sound levels remain within acceptable limits for occupant comfort'
],
correctAnswer: 'To create a pleasant acoustic environment and reduce noise disturbances for building occupants'
},

{
question: 'Which of the following strategies can promote acoustic comfort in a WELL-certified building?',
choices: [
'Use of sound-absorbing materials and surfaces',
'Proper placement of sound-producing equipment',
'Implementing sound masking or white noise systems',
'All of the above'
],
correctAnswer: 'All of the above'
}
 
            // ... other questions for Set 1
        ]
    },
     {
        subheading: 'Materials',
        questions: [
            {
question: 'What is the primary objective of the Materials Concept in the WELL Building Standard?',
choices: [
'To ensure the use of sustainable and non-toxic materials in building construction and furnishing',
'To promote efficient water use and reduce water consumption',
'To create a visually appealing and aesthetically pleasing environment',
'To minimize energy consumption from lighting systems'
],
correctAnswer: 'To ensure the use of sustainable and non-toxic materials in building construction and furnishing'
},

{
question: 'Which of the following factors are considered in the evaluation of materials in a WELL-certified building?',
choices: [
'Environmental impact and sustainability',
'Health and safety aspects',
'Durability and performance',
'All of the above'
],
correctAnswer: 'All of the above'
},

{
question: 'What is the purpose of the Material Transparency Feature in the WELL Building Standard?',
choices: [
'To ensure the use of sustainable and non-toxic materials in building construction and furnishing',
'To promote efficient water use and reduce water consumption',
'To provide information about the composition and impact of materials used in the building',
'To minimize energy consumption from lighting systems'
],
correctAnswer: 'To provide information about the composition and impact of materials used in the building'
},

{
question: 'Which of the following certifications can indicate the use of sustainable and environmentally-friendly materials?',
choices: [
'LEED certification',
'Cradle to Cradle certification',
'GREENGUARD certification',
'All of the above'
],
correctAnswer: 'All of the above'
},

{
question: 'What is the primary purpose of the Material Precaution Feature in the WELL Building Standard?',
choices: [
'To ensure the use of sustainable and non-toxic materials in building construction and furnishing',
'To promote efficient water use and reduce water consumption',
'To identify and avoid materials with known health hazards',
'To minimize energy consumption from lighting systems'
],
correctAnswer: 'To identify and avoid materials with known health hazards'
},

{
question: 'Which of the following factors are considered in assessing the health and safety of materials?',
choices: [
'Presence of harmful chemicals or volatile organic compounds (VOCs)',
'Potential for off-gassing',
'Allergenic or irritant properties',
'All of the above'
],
correctAnswer: 'All of the above'
},

{
question: 'What is the purpose of the Material Innovation Feature in the WELL Building Standard?',
choices: [
'To ensure the use of sustainable and non-toxic materials in building construction and furnishing',
'To promote efficient water use and reduce water consumption',
'To encourage the use of new and innovative materials that contribute to occupant well-being',
'To minimize energy consumption from lighting systems'
],
correctAnswer: 'To encourage the use of new and innovative materials that contribute to occupant well-being'
},

{
question: 'Which of the following strategies can support the use of sustainable materials in a WELL-certified building?',
choices: [
'Selecting materials with recycled content',
'Choosing products with third-party certifications',
'Using locally sourced materials',
'All of the above'
],
correctAnswer: 'All of the above'
},

{
question: 'What is the purpose of the Material Circularity Feature in the WELL Building Standard?',
choices: [
'To ensure the use of sustainable and non-toxic materials in building construction and furnishing',
'To promote efficient water use and reduce water consumption',
'To encourage the reuse and recycling of materials',
'To minimize energy consumption from lighting systems'
],
correctAnswer: 'To encourage the reuse and recycling of materials'
},

{
question: 'Which of the following strategies can promote material circularity in a building?',
choices: [
'Designing for disassembly and ease of material separation',
'Implementing recycling programs and waste management strategies',
'Encouraging the use of renewable and biodegradable materials',
'All of the above'
],
correctAnswer: 'All of the above'
}
 
            // ... other questions for Set 1
        ]
     },
       {
        subheading: 'Mind',
        questions: [
           {
question: 'What is the primary objective of the Mind Concept in the WELL Building Standard?',
choices: [
'To promote mental and emotional well-being of building occupants',
'To optimize energy performance and reduce environmental impact',
'To provide access to healthy food options and promote proper nutrition',
'To enhance physical activity and movement'
],
correctAnswer: 'To promote mental and emotional well-being of building occupants'
},

{
question: 'Which of the following factors are important for supporting mental well-being in a building?',
choices: [
'Access to natural daylight and views',
'Acoustic comfort and noise reduction',
'Opportunities for social interaction',
'All of the above'
],
correctAnswer: 'All of the above'
},

{
question: 'What is the purpose of the Biophilia Feature in the WELL Building Standard?',
choices: [
'To promote mental and emotional well-being through connection with nature',
'To ensure proper indoor air quality and ventilation',
'To reduce energy consumption and improve energy efficiency',
'To encourage physical activity and movement'
],
correctAnswer: 'To promote mental and emotional well-being through connection with nature'
},

{
question: 'Which of the following strategies can enhance the biophilic design of a building?',
choices: [
'Incorporating natural elements such as plants and water features',
'Maximizing access to natural daylight',
'Creating outdoor spaces and green areas',
'All of the above'
],
correctAnswer: 'All of the above'
},

{
question: 'What is the primary purpose of the Mindfulness Feature in the WELL Building Standard?',
choices: [
'To promote mental and emotional well-being through mindfulness practices',
'To optimize energy performance and reduce environmental impact',
'To provide access to healthy food options and promote proper nutrition',
'To enhance physical activity and movement'
],
correctAnswer: 'To promote mental and emotional well-being through mindfulness practices'
},

{
question: 'Which of the following activities can be associated with mindfulness practices?',
choices: [
'Meditation',
'Breathing exercises',
'Yoga',
'All of the above'
],
correctAnswer: 'All of the above'
},

{
question: 'What is the purpose of the Active Furnishings Feature in the WELL Building Standard?',
choices: [
'To promote mental and emotional well-being through active sitting and movement',
'To ensure proper indoor air quality and ventilation',
'To reduce energy consumption and improve energy efficiency',
'To encourage social interaction and collaboration'
],
correctAnswer: 'To promote mental and emotional well-being through active sitting and movement'
},

{
question: 'Which of the following furnishings can be considered as active furnishings?',
choices: [
'Height-adjustable desks',
'Ergonomic chairs with lumbar support',
'Treadmill desks',
'All of the above'
],
correctAnswer: 'All of the above'
},

{
question: 'What is the purpose of the Circadian Lighting Design Feature in the WELL Building Standard?',
choices: [
'To promote mental and emotional well-being through lighting that supports the bodys natural circadian rhythm',
'To optimize energy performance and reduce environmental impact',
'To provide access to healthy food options and promote proper nutrition',
'To enhance physical activity and movement'
],
correctAnswer: 'To promote mental and emotional well-being through lighting that supports the bodys natural circadian rhythm'
},

{
question: 'Which of the following strategies can support a circadian lighting design in a building?',
choices: [
'Using lighting systems that mimic natural daylight',
'Adjusting lighting intensity and color temperature throughout the day',
'Promoting exposure to bright light in the morning and dim light in the evening',
'All of the above'
],
correctAnswer: 'All of the above'
}
 
            // ... other questions for Set 1
        ]
     },
     {
        subheading: 'Community',
        questions: [
           {
question: 'What is the primary objective of the Community Concept in the WELL Building Standard?',
choices: [
'To foster a sense of community and social interaction among building occupants',
'To optimize energy performance and reduce environmental impact',
'To provide access to healthy food options and promote proper nutrition',
'To enhance physical activity and movement'
],
correctAnswer: 'To foster a sense of community and social interaction among building occupants'
},

{
question: 'Which of the following factors are important for promoting a sense of community in a building?',
choices: [
'Shared spaces and amenities',
'Opportunities for social interaction',
'Engagement with the local community',
'All of the above'
],
correctAnswer: 'All of the above'
},

{
question: 'What is the purpose of the Community Engagement Feature in the WELL Building Standard?',
choices: [
'To promote community involvement and participation in building initiatives',
'To ensure proper indoor air quality and ventilation',
'To reduce energy consumption and improve energy efficiency',
'To encourage physical activity and movement'
],
correctAnswer: 'To promote community involvement and participation in building initiatives'
},

{
question: 'Which of the following strategies can support community engagement in a building?',
choices: [
'Organizing events and activities for building occupants',
'Collaborating with local organizations and community groups',
'Providing spaces for meetings and gatherings',
'All of the above'
],
correctAnswer: 'All of the above'
},

{
question: 'What is the primary purpose of the Community Access Feature in the WELL Building Standard?',
choices: [
'To provide equitable access to the building and its amenities for all occupants',
'To optimize energy performance and reduce environmental impact',
'To provide access to healthy food options and promote proper nutrition',
'To enhance physical activity and movement'
],
correctAnswer: 'To provide equitable access to the building and its amenities for all occupants'
},

{
question: 'Which of the following considerations are important for ensuring community access in a building?',
choices: [
'Accessible entrances and pathways',
'Adaptation for people with disabilities',
'Inclusive amenities and facilities',
'All of the above'
],
correctAnswer: 'All of the above'
},

{
question: 'What is the purpose of the Public Health Emergency Preparedness Feature in the WELL Building Standard?',
choices: [
'To establish protocols and measures for addressing public health emergencies',
'To ensure proper indoor air quality and ventilation',
'To reduce energy consumption and improve energy efficiency',
'To encourage physical activity and movement'
],
correctAnswer: 'To establish protocols and measures for addressing public health emergencies'
},

{
question: 'Which of the following strategies can support public health emergency preparedness in a building?',
choices: [
'Implementing emergency response plans and protocols',
'Providing clear signage and communication systems',
'Ensuring access to essential supplies and resources',
'All of the above'
],
correctAnswer: 'All of the above'
},

{
question: 'What is the purpose of the Diversity and Inclusion Feature in the WELL Building Standard?',
choices: [
'To promote diversity, equity, and inclusion within the building and its operations',
'To optimize energy performance and reduce environmental impact',
'To provide access to healthy food options and promote proper nutrition',
'To enhance physical activity and movement'
],
correctAnswer: 'To promote diversity, equity, and inclusion within the building and its operations'
},

{
question: 'Which of the following strategies can support diversity and inclusion in a building?',
choices: [
'Creating inclusive policies and practices',
'Providing accessible spaces for diverse populations',
'Promoting cultural awareness and sensitivity',
'All of the above'
],
correctAnswer: 'All of the above'
}
 
            // ... other questions for Set 1
        ]
     },
        {
        subheading: 'Innovation',
        questions: [
           {
question: 'What is the primary objective of the Innovation Concept in the WELL Building Standard?',
choices: [
'To encourage creative and innovative strategies for improving building performance',
'To optimize energy performance and reduce environmental impact',
'To provide access to healthy food options and promote proper nutrition',
'To enhance physical activity and movement'
],
correctAnswer: 'To encourage creative and innovative strategies for improving building performance'
},

{
question: 'Which of the following factors are important for promoting innovation in building design and operations?',
choices: [
'Research and development of new technologies',
'Collaboration and knowledge sharing among stakeholders',
'Continuous improvement and evaluation of building performance',
'All of the above'
],
correctAnswer: 'All of the above'
},

{
question: 'What is the purpose of the Innovation and Pilot Credits in the WELL Building Standard?',
choices: [
'To provide additional opportunities for earning points and demonstrating exceptional performance',
'To ensure proper indoor air quality and ventilation',
'To reduce energy consumption and improve energy efficiency',
'To encourage physical activity and movement'
],
correctAnswer: 'To provide additional opportunities for earning points and demonstrating exceptional performance'
},

{
question: 'Which of the following strategies can be considered for earning innovation credits in the WELL Building Standard?',
choices: [
'Implementing advanced energy monitoring and management systems',
'Integrating renewable energy sources',
'Using innovative materials and technologies',
'All of the above'
],
correctAnswer: 'All of the above'
},

{
question: 'What is the purpose of the WELL Portfolio Program in the WELL Building Standard?',
choices: [
'To streamline the certification process for multiple buildings within a portfolio',
'To optimize energy performance and reduce environmental impact',
'To provide access to healthy food options and promote proper nutrition',
'To enhance physical activity and movement'
],
correctAnswer: 'To streamline the certification process for multiple buildings within a portfolio'
},

{
question: 'Which of the following benefits can be achieved through the implementation of the WELL Portfolio Program?',
choices: [
'Consistent application of health and wellness principles across multiple buildings',
'Streamlined data collection and reporting processes',
'Enhanced collaboration and knowledge sharing among building owners and stakeholders',
'All of the above'
],
correctAnswer: 'All of the above'
},

{
question: 'What is the purpose of the Innovation Accreditation in the WELL Building Standard?',
choices: [
'To recognize and celebrate exceptional achievement in innovation',
'To ensure proper indoor air quality and ventilation',
'To reduce energy consumption and improve energy efficiency',
'To encourage physical activity and movement'
],
correctAnswer: 'To recognize and celebrate exceptional achievement in innovation'
},

{
question: 'Which of the following criteria are considered for earning the Innovation Accreditation in the WELL Building Standard?',
choices: [
'Demonstration of significant innovation and positive impact on human health and well-being',
'Documentation of measurable performance and outcomes',
'Integration of advanced technologies and strategies',
'All of the above'
],
correctAnswer: 'All of the above'
},

{
question: 'What is the purpose of the WELL Community Standard in the WELL Building Standard?',
choices: [
'To extend the principles of the WELL Building Standard to broader community development',
'To optimize energy performance and reduce environmental impact',
'To provide access to healthy food options and promote proper nutrition',
'To enhance physical activity and movement'
],
correctAnswer: 'To extend the principles of the WELL Building Standard to broader community development'
},

{
question: 'Which of the following goals can be achieved through the implementation of the WELL Community Standard?',
choices: [
'Creation of healthier and more sustainable communities',
'Equitable access to health and wellness amenities',
'Enhanced social connectivity and engagement',
'All of the above'
],
correctAnswer: 'All of the above'
}
 
            // ... other questions for Set 1
        ]
},
    // Add more sets as needed
];



const quizContainer = document.getElementById('quiz-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');
const showAnswersBtn = document.getElementById('show-answers-btn');


function createQuestionElement(question, index) {
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question');
    questionDiv.setAttribute('data-question-index', index);

    const questionText = document.createElement('h2');
    questionText.textContent = question.question;
    questionDiv.appendChild(questionText);

    question.choices.forEach((choice, choiceIndex) => {
        const choiceWrapper = document.createElement('div');
        
        const choiceInput = document.createElement('input');
        choiceInput.setAttribute('type', 'radio');
        choiceInput.setAttribute('name', `question${index}`);
        choiceInput.setAttribute('value', `${choice}`);
        choiceInput.setAttribute('id', `choice${choiceIndex}question${index}`);

        const choiceLabel = document.createElement('label');
        choiceLabel.setAttribute('for', `choice${choiceIndex}question${index}`);
        choiceLabel.textContent = choice;
        
        choiceWrapper.appendChild(choiceInput);
        choiceWrapper.appendChild(choiceLabel);
        questionDiv.appendChild(choiceWrapper);
    });

    return questionDiv;
}


quizData.forEach((questionSetData, setIndex) => {
    const setDiv = document.createElement('div');
    setDiv.classList.add('question-set');
    setDiv.setAttribute('data-set-index', setIndex);
    setDiv.style.display = 'none';

    const subheading = document.createElement('h3');
    subheading.textContent = questionSetData.subheading;
    setDiv.appendChild(subheading);

    questionSetData.questions.forEach((question, questionIndex) => {
        const questionElement = createQuestionElement(question, questionIndex);
        setDiv.appendChild(questionElement);
    });

    quizContainer.appendChild(setDiv);
});




let currentSetIndex = 0;
document.querySelector('.question-set[data-set-index="0"]').style.display = 'block';

prevBtn.addEventListener('click', () => {
    if (currentSetIndex > 0) {
        document.querySelector(`.question-set[data-set-index="${currentSetIndex}"]`).style.display = 'none';
        currentSetIndex--;
        document.querySelector(`.question-set[data-set-index="${currentSetIndex}"]`).style.display = 'block';
    }
});


nextBtn.addEventListener('click', () => {
    if (currentSetIndex < quizData.length - 1) {
        document.querySelector(`.question-set[data-set-index="${currentSetIndex}"]`).style.display = 'none';
        currentSetIndex++;
        document.querySelector(`.question-set[data-set-index="${currentSetIndex}"]`).style.display = 'block';
        
        // Hide the score-display div when the next button is clicked
        const scoreDisplay = document.getElementById('score-display');
        scoreDisplay.style.display = 'none';
    }
});




submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const currentSet = document.querySelector(`.question-set[data-set-index="${currentSetIndex}"]`);
    const questions = currentSet.querySelectorAll('.question');
    let score = 0;

    questions.forEach((questionDiv, index) => {
        const questionIndex = questionDiv.getAttribute('data-question-index');
        const selectedChoice = document.querySelector(`input[name="question${index}"]:checked`);

        if (selectedChoice) {
            const userAnswer = selectedChoice.value;
            const correctAnswer = quizData[currentSetIndex].questions[questionIndex].correctAnswer;

            if (userAnswer === correctAnswer) {
                score++;
            }
        }
    });
    alert(`You answered ${score} out of ${questions.length} questions correctly.`);
    // Display the score on the page
    const scoreDisplay = document.getElementById('score-display');
    scoreDisplay.style.display = 'block'; // Make the score-display div visible
    scoreDisplay.innerHTML = `You answered ${score} out of ${questions.length} questions correctly.`;
});



let answersVisible = false;

showAnswersBtn.addEventListener('click', () => {
    const currentSet = document.querySelector(`.question-set[data-set-index="${currentSetIndex}"]`);
    const questions = currentSet.querySelectorAll('.question');

    answersVisible = !answersVisible;

    if (answersVisible) {
        showAnswersBtn.textContent = 'Hide Answers';
    } else {
        showAnswersBtn.textContent = 'Show Answers';
    }

    questions.forEach((questionDiv, index) => {
        const questionIndex = questionDiv.getAttribute('data-question-index');
        const correctAnswer = quizData[currentSetIndex].questions[questionIndex].correctAnswer;
        let correctAnswerParagraph = questionDiv.querySelector('.correct-answer');

        if (!correctAnswerParagraph) {
            correctAnswerParagraph = document.createElement('p');
            correctAnswerParagraph.classList.add('correct-answer');
            correctAnswerParagraph.textContent = `Correct Answer: ${correctAnswer}`;
            correctAnswerParagraph.style.color = 'green';
            correctAnswerParagraph.style.display = 'none';
            questionDiv.appendChild(correctAnswerParagraph);
        }

        correctAnswerParagraph.style.display = answersVisible ? 'block' : 'none';
    });
});





});




