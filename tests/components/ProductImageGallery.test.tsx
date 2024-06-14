import { render, screen } from "@testing-library/react";
import { it } from "vitest";
import ProductImageGallery from "../../src/components/ProductImageGallery";

describe("ProductImageGallery", () => {
  it("should assert the DOM is empty when rendered with an empty array ", () => {
    const { container } = render(<ProductImageGallery imageUrls={[]} />);
    expect(container).toBeEmptyDOMElement
  });

  it("should render with a list of URLS ", () => {
    const urlList = [
      "https://picsum.photos/200/300",
      "https://loremflickr.com/320/240",
      "https://placekitten.com/400/400"
    ];

    render(<ProductImageGallery imageUrls={urlList} />);
    screen.debug();
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(3)
    urlList.forEach((url, index) => {
      expect(images[index]).toHaveAttribute('src', url)

    })
  });
});
