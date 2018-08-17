export default {
  getDisplayName(component){
    return component.displayName || component.name || "Component";
  }
}