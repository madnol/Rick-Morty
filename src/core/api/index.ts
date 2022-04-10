import { rickAndMortyHttpClient } from 'core/http/clients/rick-and-morty-service/rick-and-morty-service.http';

import charactersApiFactory from 'core/api/characters/characters.api';

export const charactersApi = charactersApiFactory({
  rickAndMortyServiceHttp: rickAndMortyHttpClient,
});
