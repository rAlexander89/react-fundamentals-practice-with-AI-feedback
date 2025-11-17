# Work To Do

## Current State

### Events Component
- **Location**: `my-app/src/components/events/Events.tsx:1`
- **Current Type Definition**:
  ```typescript
  type Events = {
    Name string  // Note: Has syntax error, needs colon
  }
  ```

## Goal
Practice working with API responses and state management by pulling data from an events source API.

## Roadmap

### 1. Fix TypeScript Type Definition
- Fix syntax error in Events type (add colon between property and type)
- Expand Events type to include all necessary fields (id, name, date, location, description, etc.)

### 2. Choose Events API Source
Options:
- Public events API (Ticketmaster, Eventbrite, etc.)
- Mock API (JSONPlaceholder, mockapi.io)
- Create custom mock server

### 3. State Management Practice

#### Option A: Zustand
- Install Zustand
- Create events store
- Implement fetch logic in store
- Connect components to store

#### Option B: Context API
- Create EventsContext
- Build EventsProvider wrapper
- Implement useEvents hook
- Handle loading/error states

#### Option C: Both (comparative learning)
- Build same feature with both approaches
- Compare implementation complexity
- Understand trade-offs

### 4. API Integration
- Set up fetch/axios for API calls
- Handle loading states
- Handle error states
- Implement data fetching logic

### 5. Display Events
- Create Events list component
- Build individual Event card component
- Add filtering/sorting capabilities
- Implement pagination if needed

## Learning Objectives
- Understanding async data fetching in React
- Managing global state effectively
- Handling loading and error states
- Working with TypeScript types for API responses
- Comparing different state management approaches
