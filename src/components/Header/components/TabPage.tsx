import { Wrapper, TabLink } from "./styles";

export type TabPageTypes = "explore" | "my_movies";

export function TabPage() {
    return (
        <Wrapper role="tablist" aria-label="Pages">
            <section>
                <TabLink to="/adm" end>
                    Explorar
                </TabLink>

                <TabLink to="/adm/my-movies">
                    Meus Filmes
                </TabLink>
            </section>
        </Wrapper>
    );
}
