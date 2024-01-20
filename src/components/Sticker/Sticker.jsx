import { StickerItem } from "./Sticker.styled"

export function Sticker({img, label, handleChange}) {
    return (
        <StickerItem onClick={() => {handleChange(label, img)}} >
            <img src={img} alt="" />
            <p>{label}</p>
        </StickerItem>
    )
}