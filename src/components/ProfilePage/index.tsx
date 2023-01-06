import {
    Container,
    Banner,
    Avatar,
    ProfileData,
    LocationIcon,
    CakeIcon,
    Followage,
} from "./styles";

export function ProfilePage() {
    return (
        <Container>
            <Banner>
                <Avatar />
            </Banner>

            <ProfileData>
                {/* <EditButton>Editar perfil</EditButton> */}

                <h1>Guilhermw Rods</h1>
                <h2>@guilherme_rodz</h2>

                <p>
                    Develop at <a href="">@Rocketseat</a>
                </p>

                <ul>
                    <li>
                        <LocationIcon />
                        São Paulo, Brasil
                    </li>
                    <li>
                        <CakeIcon />
                        Nascido(a) em 21 de junho de 2001
                    </li>
                </ul>

                <Followage>
                    <span>
                        seguindo <strong>94</strong>
                    </span>
                    <span>
                        <strong> 672 </strong> seguidores
                    </span>
                </Followage>
            </ProfileData>
        </Container>
    );
}
