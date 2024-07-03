const { render, waitFor, screen } = require("@testing-library/react");

import fetchMock from 'jest-fetch-mock'; fetchMock.enableMocks();
import App from "./App";

test("receives GitHub name from GitHub REST API using jest fetch mock", async () => {
    fetch.mockResponseOnce(JSON.stringify({name: 'coder'}))
    render(<App />)
    const gitHubName = await waitFor(() => screen.getByRole('heading', { level: 2 }))
    expect(gitHubName).toHaveTextContent('coder')
  })

// Resets to original state
  beforeEach(() => {
    fetch.resetMocks();
  })


