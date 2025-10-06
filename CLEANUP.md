# Codebase Cleanup - Unused Files

The following directories contain unused files that can be safely deleted to reduce repository size and complexity:

## Files to Delete Manually

### 1. FontAwesome Webfonts (~500KB total)
**Location:** `/assets/webfonts/`

**Why:** FontAwesome icons are not used anywhere in the site. All icons use emojis instead (📧, 💬, etc.)

**Files to delete:**
```
/assets/webfonts/fa-brands-400.eot
/assets/webfonts/fa-brands-400.svg
/assets/webfonts/fa-brands-400.ttf
/assets/webfonts/fa-brands-400.woff
/assets/webfonts/fa-brands-400.woff2
/assets/webfonts/fa-regular-400.eot
/assets/webfonts/fa-regular-400.svg
/assets/webfonts/fa-regular-400.ttf
/assets/webfonts/fa-regular-400.woff
/assets/webfonts/fa-regular-400.woff2
/assets/webfonts/fa-solid-900.eot
/assets/webfonts/fa-solid-900.svg
/assets/webfonts/fa-solid-900.ttf
/assets/webfonts/fa-solid-900.woff
/assets/webfonts/fa-solid-900.woff2
```

**To delete:** `rm -rf /assets/webfonts/`

### 2. SASS Source Files
**Location:** `/assets/sass/`

**Why:** The site uses compiled CSS (`main.css`). SASS source files are not needed for production or development.

**Files to delete:**
```
/assets/sass/libs/_breakpoints.scss
/assets/sass/libs/_functions.scss
/assets/sass/libs/_mixins.scss
/assets/sass/libs/_vars.scss
/assets/sass/libs/_vendor.scss
/assets/sass/main.scss
/assets/sass/noscript.scss
```

**To delete:** `rm -rf /assets/sass/`

### 3. IE-Specific Assets
**Location:** `/assets/css/images/ie/`

**Why:** Internet Explorer is no longer supported by Microsoft and site doesn't need legacy browser support.

**Files to delete:**
```
/assets/css/images/ie/footer.png
/assets/css/images/ie/footer.svg
```

**To delete:** `rm -rf /assets/css/images/ie/`

## Completed Optimizations

✅ **Deleted:** `/assets/css/fontawesome-all.min.css` (71KB)  
✅ **Optimized:** CSS redundancies removed (removed redundant `text-align: left` declarations)  
✅ **Fixed:** HTML indentation inconsistencies across all pages  

## Size Savings

After deleting the above directories:
- **~500KB** from FontAwesome webfonts
- **~10KB** from SASS source files
- **~5KB** from IE-specific images
- **Total savings: ~515KB**

## Commands to Delete All

```bash
cd /Users/michaelbosworth/Projects/personal/dbcaglobal.com
rm -rf assets/webfonts
rm -rf assets/sass
rm -rf assets/css/images/ie
```

After deletion, commit the changes:
```bash
git add -A
git commit -m "Remove unused FontAwesome, SASS, and IE assets"
```

