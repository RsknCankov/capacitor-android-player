// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "CapacitorAndroidPlayer",
    platforms: [.iOS(.v13)],
    products: [
        .library(
            name: "CapacitorAndroidPlayer",
            targets: ["CapacitorAndroidPlayerPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", branch: "main")
    ],
    targets: [
        .target(
            name: "CapacitorAndroidPlayerPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/CapacitorAndroidPlayerPlugin"),
        .testTarget(
            name: "CapacitorAndroidPlayerPluginTests",
            dependencies: ["CapacitorAndroidPlayerPlugin"],
            path: "ios/Tests/CapacitorAndroidPlayerPluginTests")
    ]
)