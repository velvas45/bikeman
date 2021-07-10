export default function lottieValue(data){
    return {
        loop: true,
        autoplay: true,
        animationData: data,
        rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
        }
    };
}