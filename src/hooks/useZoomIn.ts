export const useFadeIn = () => {
    const zoom = {
        hidden: {
            opacity: 0,

        },
        visible: {
            opacity: 1,

            transition: {
                duration: 0.6,

                ease: "easeInOut",
            },
        },
    }
    return zoom;


};