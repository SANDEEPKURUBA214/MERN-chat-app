
import { useThemeStore } from "../store/useThemeStore";

const SettingsPage = () => {
  const { theme, setTheme } = useThemeStore();

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-xl font-bold mb-4 text-center text-gray-900 dark:text-gray-100">
          Appearance
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-6">
          Choose your theme preference
        </p>

        <div className="flex justify-between items-center bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
          <span className="text-gray-800 dark:text-gray-200 font-medium">
            {theme === "dark" ? "Dark" : "Light"} Mode
          </span>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="btn btn-primary btn-sm"
          >
            Switch
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
