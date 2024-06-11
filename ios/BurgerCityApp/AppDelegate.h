#import <RCTAppDelegate.h>
#import <UIKit/UIKit.h>
#import "AppDelegate.h"
#import <React/RCTBridge.h>
#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>
#import <ReactNativeNavigation/ReactNativeNavigation.h>
#import <React/RCTLinkingManager.h>
#import <RNReanimated/REAModule.h>
#import <RNReanimated/REASnapshot.h>

@interface AppDelegate : RCTAppDelegate

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  [ReactNativeNavigation bootstrapWithDelegate:self launchOptions:launchOptions];
  return YES;
}

- (NSArray<id<RCTBridgeModule>> *)extraModulesForBridge:(RCTBridge *)bridge
{
  // If you use any other modules that need to be initialized, add them here
  return @[];
}

@end