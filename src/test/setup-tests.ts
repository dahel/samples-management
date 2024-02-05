/// <reference types="vitest" />
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/matchers';
import { setupServer } from 'msw/node'
import { handlers } from './handlers.js'

export const server = setupServer(...handlers)

beforeAll(() => {
  server.listen()
})

afterEach(() => {
  server.resetHandlers()
})

afterAll(() => {
  server.close()
})

vi.mock('next/navigation', async () => {
  const actual = await vi.importActual('next/navigation');
  return {
    ...actual,
    useRouter: vi.fn(() => ({
      push: vi.fn(),
      replace: vi.fn(),
      refresh: vi.fn()
    })),
    useSearchParams: vi.fn(() => ({})),
    usePathname: vi.fn(),
  };
});
