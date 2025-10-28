import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { MusicPlayerProvider } from "@/hooks/useMusicPlayer";
import { Layout } from "@/components/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Entertainment from "@/pages/Entertainment";
import Gallery from "@/pages/Gallery";
import Staff from "@/pages/Staff";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/entertainment" component={Entertainment} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/staff" component={Staff} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <MusicPlayerProvider>
          <Toaster />
          <Router />
        </MusicPlayerProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
