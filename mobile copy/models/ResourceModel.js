class RESOURCE_TEMPLATE {
    constructor() {
        this.default_template = [
            {
                id: 'menstruation',
                title: 'Menstruation',
            },
            {
                id: 'nutrition',
                title: 'Nutrition',
            },
            {
                id: 'exercise',
                title: 'Exercise',
            },
            {
                id: 'mental_health',
                title: 'Mental Health',
            },
            {
                id: 'sex_education',
                title: 'Sex Education',
            },
            {
                id: 'sustainability',
                title: 'Sustainability',
            },
        ]

        this.default_images = {
            menstruation: require("../assets/profile_images/default_profile_women_2.jpg"),
            nutrition: require("../assets/profile_images/default_profile_women_1.jpg"),
            exercise: require("../assets/profile_images/default_profile_women_3.jpg"),
            mental_health: require("../assets/profile_images/default_profile_women_1.jpg"),
            sex_education: require("../assets/profile_images/default_profile_women_2.jpg"),
            sustainability: require("../assets/profile_images/default_profile_women_3.jpg")
        }

        this.default_pages = {
            menstruation: "ResourceMenstruationScreen",
            nutrition: "ResourceNutritionScreen",
            exercise: "ResourceExerciseScreen",
            mental_health: "ResourceMentalHealthScreen",
            sex_education: "ResourceSexEducationScreen",
            sustainability: "ResourceSustainabilityScreen"
        }
    }
}

// const MENSTRUATION = [
//     {
//         question: 'What is Menstruation?',
//         answer: 
//         <View>
//             <View style={styles.viewWrapper}>
//                 <Text style={styles.textStyle}>
//                     {"Menstruation is normal vaginal bleeding that occurs as part of a woman's monthly cycle. \
// Every month, your body prepares for pregnancy. If no pregnancy occurs, the uterus, or womb, sheds its lining. \
// The menstrual blood is partly blodd and partly tissue from inside the uterus. It passed out of the body through the vagina."}
//                 </Text>
//             </View>

//             <View style={{flex: 1}}>
//             <ReactNativeZoomableView
//             maxZoom={1.5}
//             minZoom={0.5}
//             zoomStep={0.5}
//             initialZoom={1}
//             bindToBorders={true}
//             captureEvent={true}
//             >
//                 {/* <Image
//                 style={{resizeMode: "contain", width: '100%'}}
//                 source={require("../assets/resources_images/what_is_menstruation.jpg")}
//                 /> */}
//             </ReactNativeZoomableView>
//             </View>
//         </View>
//     },
//     {
//         question: 'Question 2?',
//         answer: <Text></Text>
//     },
//     {
//         question: 'Question 3?',
//         answer: 'Answer 3'
//     },
//     {
//         question: 'Question 4?',
//         answer: 'Answer 4'
//     },
//     {
//         question: 'Question 5?',
//         answer: 'Answer 5'
//     }
// ];
// export { MENSTRUATION };

export default RESOURCE_TEMPLATE;