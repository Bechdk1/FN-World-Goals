import { Routes, Route } from "react-router-dom";
import { HomePage } from "../../pages/HomePage/HomePage";
import { ThemePage } from "../../pages/ThemePages/ThemePage";
import { ThemeGoalList } from "../../pages/ThemePages/ThemeGoalList";
import { ThemeGoalDetails } from "../../pages/ThemePages/ThemeGoalDetails";
import { FAQPage } from "../../pages/FAQPage/FAQPage";
import { EducationPage } from "../../pages/EducationPage/EducationPage";
import { BYOPage } from "../../pages/BYOPage/BYOPage";
import { LoginPage } from "../../pages/LoginPage/LoginPage";
import { ContactPage } from "../../pages/ContactPage/ContactPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/themes" element={<ThemePage />}>
        <Route path=":theme_slug" element={<ThemeGoalList />} />
        <Route path=":theme_slug/:goal_id" element={<ThemeGoalDetails />} />
      </Route>
      <Route path="/faq" element={<FAQPage />} />
      <Route path="/education" element={<EducationPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/build" element={<BYOPage />} />
    </Routes>
  );
};
