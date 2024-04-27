import MenuTabs from "@/components/MenuTabs";
import { Box, Stack } from "@mui/material";


export default function InstagramLayout({ children }) {
    return <section>
        <Stack
            direction="row"
            justifyContent="center"
            style={{ width: "100%" }}>
            <MenuTabs
                tabs={[
                    { value: 0, label: "Video", key: "video" },
                    { value: 1, label: "Photo", key: "photo" },
                    { value: 2, label: "Reel", key: "reel" }
                ]}
                from={"instagram"}
            />
        </Stack>
        <Box component="div">{children}</Box>
    </section>
}