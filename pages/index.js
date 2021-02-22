import Menu from "../src/components/commons/Menu";
import Footer from "../src/components/commons/Footer";
import { Button } from "../src/components/commons/Button";
import Text from "../src/components/foundation/Text";
export default function Home() {
  return (
    <div
      style={{
        flex: "1",
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Menu />

      <div>
        <Text
          variant="title"
          tag="h1"
          color="tertiary.main"
          textAlign={{ xs: "center", md: "left" }}
        >
          Compartilhe momentos e conecte-se com amigos
        </Text>
        <Text
          variant="paragraph1"
          tag="p"
          color="tertiary.light"
          textAlign={{ xs: "center", md: "left" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
          massa sed risus luctus fermentum. Praesent eu posuere mauris. Vivamus
          sit amet odio nibh. Ut maximus nibh ac sapien aliquam consequat. In
          volutpat, lectus quis molestie lobortis, tellus odio auctor lectus, in
          dignissim lectus libero vitae libero. Vestibulum nisl urna, auctor sit
          amet porta tincidunt, mattis quis arcu. Quisque cursus gravida lectus,
          eu porttitor justo placerat a. Nunc vestibulum ac justo a ornare. Sed
          in mauris arcu. Cras vitae turpis vitae mi tempus sollicitudin ac a
          erat. Nulla justo erat, euismod vel augue et, cursus condimentum
          tellus. Aliquam porttitor ornare erat in molestie. Phasellus erat
          justo, placerat ac quam in, placerat mattis mi.
        </Text>

        <Button
          margin={{ xs: "auto", md: "initial" }}
          display="block"
          variant="primary.main"
        >
          Cadastrar
        </Button>
      </div>

      <Footer />
    </div>
  );
}
