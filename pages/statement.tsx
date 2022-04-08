import { useRouter } from "next/router"
import { Button } from "@geist-ui/core"

const Statement = () => {
    const router = useRouter()

    return (
        <div>
            <Button onClick={() => router.back()}>
                back
            </Button>
            <div>
                {/* 在这里写 */}
                2333
            </div>
        </div>
    )
}

export default Statement