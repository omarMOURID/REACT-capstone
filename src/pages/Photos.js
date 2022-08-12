import React from "react"
import Image from "../components/Image"
import { getClass } from "../utils/index"
import { context } from "../utils/context"


export default function Photos() {
    const { allPhotos } = React.useContext(context)

    const images = allPhotos?.map((image, index) => {
        return (
            <Image key={image.id} img={image} className={getClass(index)} />
        )
    })

    return (
        <main className="photos">
            {images}
        </main>
    )

}