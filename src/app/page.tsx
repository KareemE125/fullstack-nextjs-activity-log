
export default function App() {
  return (
    <main>
      <h1 className="text-4xl text-center font-bold mb-6">
        Instatus Activity Logs
      </h1>
    </main>
  )
}


// STEP(1): use this component instead to prefetch events data (Hydration)
// STEP(2): go to src/services/queryHooks.ts to replace the useEvents hook 
//          with the option {revalidateOnMount: false}
/*
export default async function App() {
  const prefetchedData = await prefetchData();

  return (
    <SWRProvider fallback={prefetchedData}>
      <main>
        ......
      </main>
    </SWRProvider>
  )
}

async function prefetchData() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const events = DummyEvents;
  return {
    "/events": {events},
  };
}
*/