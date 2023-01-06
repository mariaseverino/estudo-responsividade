import { Container, BackIcon, ProfileInfo } from "./styles";

export function Header() {
    return (
        <Container>
            <button>
                <BackIcon />
            </button>

            <ProfileInfo>
                <strong>Guilherme Rodz</strong>
                <span>612 Tweets</span>
            </ProfileInfo>
        </Container>
    );
}
