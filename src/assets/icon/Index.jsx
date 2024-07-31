import ArrowDown from "./arrowDown";
import Book from "./book";
import Branch from "./branch";
import Cancel from "./cancel";
import Check from "./check";
import Github from "./github";
import Heart from "./heart";
import Home from "./home";
import Link from "./link";
import Location from "./location";
import Search from "./search";
import Star from "./star";
import Twitter from "./twitter";
import User from "./user";

function Index({ name, size = 16, color = "#fff", ...props }) {
  const iconProps = { size, color, ...props };
  switch (name) {
    case "arrowDown": {
      return <ArrowDown {...iconProps} />;
    }
    case "book": {
      return <Book {...iconProps} />;
    }
    case "branch": {
      return <Branch {...iconProps} />;
    }
    case "cancel": {
      return <Cancel {...iconProps} />;
    }
    case "check": {
      return <Check {...iconProps} />;
    }
    case "github": {
      return <Github {...iconProps} />;
    }
    case "heart": {
      return <Heart {...iconProps} />;
    }
    case "home": {
      return <Home {...iconProps} />;
    }
    case "link": {
      return <Link {...iconProps} />;
    }
    case "location": {
      return <Location {...iconProps} />;
    }
    case "search": {
      return <Search {...iconProps} />;
    }
    case "star": {
      return <Star {...iconProps} />;
    }
    case "twitter": {
      return <Twitter {...iconProps} />;
    }
    case "user": {
      return <User {...iconProps} />;
    }
    default: {
      return null;
    }
  }
}

export default Index;
