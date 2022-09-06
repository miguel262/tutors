import { Stack } from "@chakra-ui/react";
import { FaHome } from "react-icons/fa";
import { useAuth } from "./Auth";
import { DarkModeToggle } from "./DarkModeToggle";
import { ScrollArea } from "./ScrollArea";
import { SidebarLink } from "./SidebarLink";

export function Navigation() {
  const { user } = useAuth();
  return (
    <ScrollArea pt="5" pb="6">
      <Stack pb="6">
        <SidebarLink icon={<FaHome />} href="/">
          Tutor
        </SidebarLink>
      </Stack>

      <Stack pb="6">
        {user && (
          <>
            <SidebarLink href={"contentSelect?type=4"}>
              Factorización
            </SidebarLink>
            <SidebarLink href={"contentSelect?type=5"}>Ecuaciones</SidebarLink>
            <SidebarLink href={"contentSelect?type=6"}>Fracciones</SidebarLink>
            <SidebarLink href={"contentSelect?type=7"}>Geometría</SidebarLink>
            <SidebarLink href={"valtioExample"}>ejemplo valtio</SidebarLink>
            <SidebarLink href={"storageExample"}>ejemplo storage</SidebarLink>
          </>
        )}
      </Stack>

      <Stack alignItems="center">
        <DarkModeToggle />
      </Stack>
    </ScrollArea>
  );
}
