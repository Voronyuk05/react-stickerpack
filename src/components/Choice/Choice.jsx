import { ChoiceText } from "./Choice.styled"

export function Choice({label, imgSrc}) {
    return (
        <>
            <ChoiceText>{label}</ChoiceText>
            <img src={imgSrc} alt="" />
        </>
    )
}