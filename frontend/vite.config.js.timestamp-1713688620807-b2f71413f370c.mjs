// vite.config.js
import { defineConfig } from "file:///home/sonal/Desktop/sem6project/frontend/node_modules/vite/dist/node/index.js";
import react from "file:///home/sonal/Desktop/sem6project/frontend/node_modules/@vitejs/plugin-react-swc/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react()],
  daisyui: {
    themes: false,
    // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "light",
    // name of one of the included themes for dark mode
    base: true,
    // applies background color and foreground color for root element by default
    styled: true,
    // include daisyUI colors and design decisions for all components
    utils: true,
    // adds responsive and modifier utility classes
    prefix: "",
    // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true,
    // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root"
    // The element that receives theme color CSS variables
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9zb25hbC9EZXNrdG9wL3NlbTZwcm9qZWN0L2Zyb250ZW5kXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9zb25hbC9EZXNrdG9wL3NlbTZwcm9qZWN0L2Zyb250ZW5kL3ZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3NvbmFsL0Rlc2t0b3Avc2VtNnByb2plY3QvZnJvbnRlbmQvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0LXN3YydcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtyZWFjdCgpXSxcbiAgZGFpc3l1aToge1xuICAgIHRoZW1lczogZmFsc2UsIC8vIGZhbHNlOiBvbmx5IGxpZ2h0ICsgZGFyayB8IHRydWU6IGFsbCB0aGVtZXMgfCBhcnJheTogc3BlY2lmaWMgdGhlbWVzIGxpa2UgdGhpcyBbXCJsaWdodFwiLCBcImRhcmtcIiwgXCJjdXBjYWtlXCJdXG4gICAgZGFya1RoZW1lOiBcImxpZ2h0XCIsIC8vIG5hbWUgb2Ygb25lIG9mIHRoZSBpbmNsdWRlZCB0aGVtZXMgZm9yIGRhcmsgbW9kZVxuICAgIGJhc2U6IHRydWUsIC8vIGFwcGxpZXMgYmFja2dyb3VuZCBjb2xvciBhbmQgZm9yZWdyb3VuZCBjb2xvciBmb3Igcm9vdCBlbGVtZW50IGJ5IGRlZmF1bHRcbiAgICBzdHlsZWQ6IHRydWUsIC8vIGluY2x1ZGUgZGFpc3lVSSBjb2xvcnMgYW5kIGRlc2lnbiBkZWNpc2lvbnMgZm9yIGFsbCBjb21wb25lbnRzXG4gICAgdXRpbHM6IHRydWUsIC8vIGFkZHMgcmVzcG9uc2l2ZSBhbmQgbW9kaWZpZXIgdXRpbGl0eSBjbGFzc2VzXG4gICAgcHJlZml4OiBcIlwiLCAvLyBwcmVmaXggZm9yIGRhaXN5VUkgY2xhc3NuYW1lcyAoY29tcG9uZW50cywgbW9kaWZpZXJzIGFuZCByZXNwb25zaXZlIGNsYXNzIG5hbWVzLiBOb3QgY29sb3JzKVxuICAgIGxvZ3M6IHRydWUsIC8vIFNob3dzIGluZm8gYWJvdXQgZGFpc3lVSSB2ZXJzaW9uIGFuZCB1c2VkIGNvbmZpZyBpbiB0aGUgY29uc29sZSB3aGVuIGJ1aWxkaW5nIHlvdXIgQ1NTXG4gICAgdGhlbWVSb290OiBcIjpyb290XCIsIC8vIFRoZSBlbGVtZW50IHRoYXQgcmVjZWl2ZXMgdGhlbWUgY29sb3IgQ1NTIHZhcmlhYmxlc1xuICB9LFxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBMFMsU0FBUyxvQkFBb0I7QUFDdlUsT0FBTyxXQUFXO0FBR2xCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFBQSxFQUNqQixTQUFTO0FBQUEsSUFDUCxRQUFRO0FBQUE7QUFBQSxJQUNSLFdBQVc7QUFBQTtBQUFBLElBQ1gsTUFBTTtBQUFBO0FBQUEsSUFDTixRQUFRO0FBQUE7QUFBQSxJQUNSLE9BQU87QUFBQTtBQUFBLElBQ1AsUUFBUTtBQUFBO0FBQUEsSUFDUixNQUFNO0FBQUE7QUFBQSxJQUNOLFdBQVc7QUFBQTtBQUFBLEVBQ2I7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
