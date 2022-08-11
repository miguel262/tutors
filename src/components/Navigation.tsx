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
            <SidebarLink href={"contentSelect?type=factorizacion"}>
              Factorización
            </SidebarLink>
            <SidebarLink href={"contentSelect?type=ecuaciones"}>
              Ecuaciones
            </SidebarLink>
            <SidebarLink href={"contentSelect?type=fracciones"}>
              Fracciones
            </SidebarLink>
            <SidebarLink href={"contentSelect?type=geometria"}>
              Geometría
            </SidebarLink>
          </>
        )}
      </Stack>

      <Stack alignItems="center">
        <DarkModeToggle />
      </Stack>
    </ScrollArea>
  );
}
